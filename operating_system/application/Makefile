CC=g++
prom = main
deps = process_schedule.h pipe.h
obj = main.o process_schedule.o pipe.o thread.o format_minix.o
ARG += -g -lpthread

$(prom): $(obj)
	$(CC)  -g -o $(prom) $(obj) $(ARG)

#%.o:%.c 所有的.o目标都依赖于与它同名的.c文件
#当然还有deps中列出的头文件
#$<  第一个依赖文件    $@目标文件   $^所有的依赖文件
$(obj) : %.o: %.cpp
	$(CC) -g -c $< -o $@  $(ARG)

clean:
	rm -rf $(obj) $(prom)