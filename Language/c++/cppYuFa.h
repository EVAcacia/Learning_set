/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ruog__
 * @Date: 2023-03-22 08:48:17
 * @LastEditors: ruog__
 * @LastEditTime: 2023-03-23 09:12:59
 */
#pragma once

#ifndef CPPYUFA
#define CPPYUFA

#include <deque>
#include <string>
#include <assert.h>
using namespace std;

class CppYuFa
{
public:
	//�����ʼ��
	//��ʼ������ʱ������ʡ�ԵȺţ�c++11
	double test1[4]{ 1.2e4, 1.2e4, 1.2e4, 1.2e4 };
	//���ڴ������ڰ����κζ�������Ĭ������Ϊ0
	float test2[100]{};
	//��ʼ����ֹ��խ���������� ���� ��long test3[3] {25, 25, 0.4}    0.4Ϊ�����͡�  


	void putDeque(char* que);//�����
	int frameNumCache = 160;
	std::deque<char*> seqImages;
};



// const char *ptr;
// char const *ptr;  
//����������ͬ�� const����char ,����һ��ָ���ַ�������ָ�룬*ptr��ֵΪconst�������޸ġ�
// ����һ��ָ���ַ�������ָ�룬���ptr��һ��ָ�� char* ���͵ĳ�����
// ���Բ�����ptr���޸���ָ������ݣ����仰˵��*ptr��ֵΪconst�������޸ġ�
// ����ptr������������ζ����ָ���ֵʵ���Ͼ���һ����������ֻ����ζ�Ŷ�ptr���ԣ����ֵ�ǳ�����
// ������ͨ�����¸�ֵ����ָ�����޸�ָ��ָ���ֵ

// char * const ptr;
// ����һ��ָ���ַ���ָ�볣������constָ�룬ʵ���֪�������޸�ptrָ�룬���ǿ����޸ĸ�ָ��ָ������ݡ�

class ConstTest
{
    public:
    const char *ptr1;
    char const *ptr2;
    char * const ptr3 = buff2;

    char buff[4096];
    char buff2[4096];

    ConstTest();

    bool test();
};
#endif