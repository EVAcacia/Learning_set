

#include "cppYuFa.h"
#include <cstring>

void CppYuFa::putDeque(char* que)
{
	if (seqImages.size() < frameNumCache)
	{
		seqImages.push_back(que);
	}
	else
	{
		char *tmp = seqImages.front();  //��ʼԪ�ء�
		seqImages.pop_front();//ɾ�����е�һ��Ԫ�ء�
		assert(seqImages.size() < frameNumCache);
		seqImages.push_back(que);
	}
}


ConstTest::ConstTest()
{
    memset(buff, 0, 4096);
}

bool ConstTest::test()
{
    ptr1 = buff;
    //ptr1[0] = 'l';//����ᱨ����Ϊ�������޸ġ�
//=================================================
    //ptr3 = buff;//��ָ�벻���޸ģ�����ʱ���븳ֵ.
    ptr3[0] = '1';
    
    return true;
}