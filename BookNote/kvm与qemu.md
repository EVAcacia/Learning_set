# kvm与qemu

## 1.编译与安装

```sh
$cd qemu-2.0.0 			#如果使用的是git下载的源码，执行cd qemu
$./configure --enable-kvm --enable-debug --enable-vnc --enable-werror  --target-list="x86_64-softmmu"
$make -j8
$sudo make install
```

- --enable-vnc：启用 VNC。 
- --enable-kvm：编译 KVM 模块，使 Qemu 可以利用 KVM 来访问硬件提供的虚拟化服务。 
- --enalbe-werror：编译时，将所有的警告当作错误处理。 
- --target-list：选择目标机器的架构。默认是将所有的架构都编译，但为了更快的完成编译，指定需要的架构即可



安装好之后，会生成如下应用程序：

- ivshmem-client/server：这是一个 guest 和 host 共享内存的应用程序，遵循 C/S 的架构。
- qemu-ga：这是一个不利用网络实现 guest 和 host 之间交互的应用程序（使用 virtio-serial），运行在 guest 中。
- qemu-io：这是一个执行 Qemu I/O 操作的命令行工具。
- qemu-system-x86_64：Qemu 的核心应用程序，虚拟机就由它创建的。
- qemu-img：创建虚拟机镜像文件的工具，下面有例子说明。
- qemu-nbd：磁盘挂载工具。





## 2.创建虚拟机

2.1使用qemu-img创建虚拟机镜像

​	虚拟机镜像用来模拟虚拟机的硬盘，在启动虚拟机之前需要创建镜像文件。

```sh
qemu-img create -f qcow2 test-vm-1.qcow2 10G
```

-f 选项用于指定镜像的格式，qcow2 格式是 Qemu 最常用的镜像格式，采用来写时复制技术来优化性能。

test-vm-1.qcow2 是镜像文件的名字，10G是镜像文件大小。



2.2使用 qemu-system-x86 来启动 x86 架构的虚拟机

```sh
qemu-system-x86_64 test-vm-1.qcow2
```

因为 test-vm-1.qcow2 中并未给虚拟机安装操作系统，所以会提示 “No bootable device”，无可启动设备。



- 启动 VM 安装操作系统镜像

```sh
qemu-system-x86_64 -m 2048 -enable-kvm test-vm-1.qcow2 -cdrom ./Centos-Desktop-x86_64-20-1.iso
```

-m 指定虚拟机内存大小，默认单位是 MB， 

-enable-kvm 使用 KVM 进行加速，

-cdrom 添加 fedora 的安装镜像。

可在弹出的窗口中操作虚拟机，安装操作系统，安装完成后重起虚拟机便会从硬盘 ( test-vm-1.qcow2 ) 启动。

- 之后再启动虚拟机只需要执行：

```sh
qemu-system-x86_64 -m 2048 -enable-kvm test-vm-1.qcow2
```

qemu-img 支持非常多种的文件格式，可以通过 qemu-img -h 查看 

其中 raw 和 qcow2 是比较常用的两种，raw 是 qemu-img 命令默认的，qcow2 是 qemu 目前推荐的镜像格式，是功能最多的格式。

























## 源码解析













