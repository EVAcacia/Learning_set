
;����ʱ��2019.11.20

;���ö�ջ�κ�ջָ��
mov eax,cs
mov ss,ax
mov sp,0x7c00

;ͨ��GDT�������ַ�����߼��ε�ַ
mov eax,[cs:gdt_base+0x7c00+0x02];
xor edx,edx
mov ebx,16
div ebx

mov ds,eax ;�λ�ַ
mov ebx,edx;����ƫ�Ƶ�ַ

         ;����0����������������ø����������������쳣�ж�
         mov dword [ebx+0x00],0x00000000
         mov dword [ebx+0x04],0x00000000
         ;����1#������������һ�����ݶΣ���Ӧ0~4GB�����Ե�ַ�ռ�
         mov dword [ebx+0x08],0x0000ffff    ;����ַΪ0���ν���Ϊ0xfffff
         mov dword [ebx+0x0c],0x00cf9200    ;����Ϊ4KB���洢���������� 

         ;��������ģʽ�³�ʼ�����������
         mov dword [ebx+0x10],0x7c0001ff    ;����ַΪ0x00007c00��512�ֽ� 
         mov dword [ebx+0x14],0x00409800    ;����Ϊ1���ֽڣ������������ 

         ;�������ϴ���εı���������
         mov dword [ebx+0x18],0x7c0001ff    ;����ַΪ0x00007c00��512�ֽ�
         mov dword [ebx+0x1c],0x00409200    ;����Ϊ1���ֽڣ����ݶ�������

         ;ջ��
         mov dword [ebx+0x20],0x7c00fffe
         mov dword [ebx+0x24],0x00cf9600

        ;��ʼ��GDTR
	mov word [cs:gdt_size+0x7c00],39;����maxƫ��
	lgdt [cs:gdt_size+0x7c00];��ָ�ƫ�ƺ������ַ���ؽ�GDTR
	
	;A20λ�򿪣�����32λ����ģʽ����20λ�ĵ�ַ��ת��
	in al,0x92
	or al, 0000_0010B
	out 0x92,al
	cli	;��������ж�
	
	mov eax,cr0
	or eax,1
	mov cr0,eax	;����CR0�Ĵ�����PEλ
	
	
	;���뱣��ģʽ
	jmp dword 0x0010:flush	;0010�Ǵ������������ƫ�ƣ�ѡ���ӣ�
	[bits 32]	;���߱�����������32λ
flush:
	mov eax,0x0018
	mov ds,eax	; data ����ѡ���Ӵ����μĴ���ʱ������������ɴ������֮ǰ�����ж�ѡ���ӵ�ƫ��+7�Ƿ񳬹�
			;��������������ƫ�ƣ����һ����ж�ѡ���Ӷ�Ӧ�Ķ���Ϣ�Ƿ��뱻����ĶμĴ������ͷ��ϣ��ɶ���				;д������������ݶΣ����й涨��
	mov eax,0x0008	;Ѱַ0-4G�����ݶ�
	mov es,eax
    	mov fs,eax
         	mov gs,eax
	
	mov eax,0x0020
	mov ss,eax
	xor esp,esp	;ƫ������

	mov dword [es:0x0b8000],0x072e0750 ;�ַ�'P'��'.'������ʾ����
         	mov dword [es:0x0b8004],0x072e074d ;�ַ�'M'��'.'������ʾ����
         	mov dword [es:0x0b8008],0x07200720 ;�����հ��ַ�������ʾ����
         	mov dword [es:0x0b800c],0x076b076f ;�ַ�'o'��'k'������ʾ����
	

	;��ʼð������
	mov ecx,gdt_size-string-1	;��������
@@1:
	push ecx
	xor bx,bx
@@2:
	mov ax,[string+bx] ;al��ǰһ���ַ���ah��һ�����ֽ�
	cmp ah,al
	jge @@3;ah����alʱ��ת
	xchg al,ah
	mov [string+bx],ax;����ȥ
@@3:
	inc bx
	loop @@2
	pop ecx	;����ѭ��ecx��仯����Ҫ����
	loop @@1;loopʹecx����-1
	
	mov ecx,gdt_size-string
	xor ebx,ebx
@print:
;��ʼ��ӡ
	mov al,[string+ebx]
	mov ah,0x07
	mov [es:0xb80a0+ebx*2],ax
	inc ebx
	loop @print
	hlt

;=====================
string db 's0ke4or92xap3fv8giuzjcy5l1m7hd6bnqtw.'

gdt_size dw 0;GDT�����������ƫ��
gdt_base dd 0x00007e00
times 510-($-$$) db 0
	              db 0x55,0xaa
