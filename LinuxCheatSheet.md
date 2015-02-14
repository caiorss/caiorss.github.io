# Linux Cheat Sheet

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Keyboard](#keyboard)
  - [Keyboard Layout](#keyboard-layout)
    - [Keyboard Layout Files](#keyboard-layout-files)
    - [lodkeys](#lodkeys)
    - [setxkbmap](#setxkbmap)
    - [Fixing ThinkPadE 430 Lenovo Laptop Keyboard Layout](#fixing-thinkpade-430-lenovo-laptop-keyboard-layout)
  - [Touchpad](#touchpad)
  - [Magic SysRq Key - Key to Fix Any Linux Freeze-Up](#magic-sysrq-key---key-to-fix-any-linux-freeze-up)
- [Configuration and Log Files](#configuration-and-log-files)
  - [Configuration Files](#configuration-files)
    - [System](#system)
    - [Users, Groups and Permissions](#users-groups-and-permissions)
    - [Network](#network)
  - [Log Files](#log-files)
- [Standard Unix Utilities](#standard-unix-utilities)
- [Network](#network-1)
  - [DNS Server](#dns-server)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->




## Keyboard

Setting Kyboard Layout

### Keyboard Layout

#### Keyboard Layout Files

```
See:  ls  /usr/share/X11/xkb
less  /usr/share/X11/xkb/symbols/br 
      /usr/share/X11/xkb/symbols/us
      /usr/share/X11/xkb/symbols/gb
      /usr/share/X11/xkb/symbols/es

```

#### lodkeys
Set keyboard layout in terminal

* loadkeys - load keyboard translation tables
* Documentation

Example: 
    
```bash
sudo loadkeys br-abnt2
```

#### setxkbmap

Set Keyboard Layout in Xserver 

* setxkbmap - set the keyboard using the X Keyboard Extension
* Documentation: man setxkbmap

Example:
    
```bash 
setxkbmap -model abnt2 -layout br -variant abnt2 
```

#### Fixing ThinkPadE 430 Lenovo Laptop Keyboard Layout

```bash 
    setxkbmap -model thinkpad60 -layout br 
```


### Touchpad

**Disable Laptop Touchpad**

```bash 
$ synclient TouchpadOff=1
```

**Enable Laptop Touchpad**

```bash 
$ synclient TouchpadOff=0
```


### Magic SysRq Key - Key to Fix Any Linux Freeze-Up

The magic key can save linux from crashings and be used as a last resource
to fix the computer.

**Activate The Magic Key**


If the magic key is activated the following line will return "1"

```bash
$ cat /proc/sys/kernel/sysrq 
1
```

To activate the magic key type:

```bash    
sudo echo "1" > /proc/sys/kernel/sysrq
# Or
sudo sysctl kernel.sysrq=1
```

To have the magic key working after reboot, edit the file "/etc/sysctl.conf"".
and change the change the line with kernel.sysreq to:
    
```
kernel.sysrq = 1
```

**Keybinds**

```
CTRL + SysRq + [Key]
```

| Keybind |  Description |
|----------------------|--------------|
| Alt+SysRq+b |  reboots the computer |
| Alt+SysRq+e |  ask all processes to terminate gracefully |
| Alt+SysRq+f |  to get rid of an Out Of Memory condition via oom_kills |
| Alt+SysRq+i |  to kill all processes immediately except init |
| Alt+SysRq+k |  to kill absolutely all processes, including X |
| Alt+SysRq+m |  to output the current memory information |
| Alt+SysRq+o |  to shut down the computer |s
| Alt+SysRq+r |  very useful, to take the keyboard out of the X server control |
| Alt+SysRq+s |  to sync data from all mounted devices (avoid data loss in case of violent reboot) |
| Alt+SysRq+t |  to display a list of the current tasks |
| Alt+SysRq+u |  to remount all file system in read| only mode |
    
**Frozen X Server**

* [Alt + SysRq + r] – Takes the control away from the X server, then it is possible to use  [Ctrl + Alt + F1] (and other F-key) keyboard shortcuts to switch to another console and restart X.

* [Alt + SysRq + k] – Kills all programs on the current virtual console and X. 

* [Alt + SysRq + f] - Calls oom_kill, which will kill a memory-hogging process.


## Configuration and Log Files

### Configuration Files

#### System

| File                 | Description                                             |
|----------------------|---------------------------------------------------------|
| /etc/fstab           | Disks, partitions and file systems mountpoint settings. | 
| /etc/shells          | Valid login shells |
| /etc/environment     | First Value of Path Variable   | 
| /etc//etc/lsb-release| Distribution Name    |
| /etc/issue           | Distribution Version | 

#### Users, Groups and Permissions

| File                 | Description                                             |
|----------------------|---------------------------------------------------------|
| /etc/group           | Groups configuration file |
| /etc/passwd          | Users configuration file |
| /etc/sudoers         | Sudoers, sudo configuration file |


#### Network

| File                 | Description                                             |
|----------------------|---------------------------------------------------------|
| /etc/hostname        | Computer hostname  |
| /etc/hosts           | Default hosts |
| /etc/hosts.allow     | List of hosts that are allowed to access the system |
| /etc/hosts.deny      | List of hosts that are _not_ allowed to access the system |
| /etc/network/interfaces | Network interfaces available on your system |
| /etc/resolv.conf  | DNS Settings |
| /etc/services  | Port number for both TCP and UDP and services (HTTP/ HTTPS/ FTP)... |


### Log Files

The log files are useful to debug and troubleshooting the system. 

Useful commands to log files:

* See the last lines of file
```bash
tail -f /var/log/dmesg  
```

* Filter a log file
```bash
grep /var/log/dmesg  -i wlan 
grep /var/log/dmesg  -i wlan -C 3  # Show also 3 lines above and 3 lines below 
```



| File                 | Description                                             |
|----------------------|---------------------------------------------------------|
| /var/log             | Log Directory |
| /var/log/dmesg       | Message Log |
| /var/log/kern.log    | Kernel Log |
| /var/log/syslog      | Syslog |
| /var/log/auth.log    | User logging, ssh errors |



## Standard Unix Utilities

```bash

Some Standard UNIX utilities


$ whereis somecommand
locate bin, src, and man file for a command 

$ whereis gcc
gcc: /usr/bin/gcc /usr/lib/gcc /usr/bin/X11/gcc /usr/share/man/man1/gcc.1.gz


$ which <command>
Show path to command

$ which bash
/bin/bash


$ whoami
Show Current User
$ whoami
tux


$ whatis <command>
Brief description of command 

$ whatis gcc
gcc (1)              - GNU project C and C++ compiler


$ apropos <command>
Find related commands and description

c89-gcc (1)          - ANSI (1989) C compiler
c99-gcc (1)          - ANSI (1999) C compiler
gcc (1)              - GNU project C and C++ compiler
gcc-4.8 (1)          - GNU project C and C++ compiler
gcc-4.9 (1)          - GNU project C and C++ compiler
i686-linux-gnu-gcc-ar-4.8 (1) - a wrapper around ar adding the - plugin option
gcc-ar-4.8 (1)       - a wrapper around ar adding the - plugin option

```

## Network


### DNS Server 

The DNS servers can be changed by editing the file: /etc/resolv.config

```
# Dynamic resolv.conf(5) file for glibc resolver(3) generated by resolvconf(8)
#     DO NOT EDIT THIS FILE BY HAND -- YOUR CHANGES WILL BE OVERWRITTEN
nameserver 127.0.0.1
search domain.name

# Example: OpenDNS
nameserver 208.67.222.222  208.67.220.220

```

|                |                 |                   |
|----------------|-----------------|-------------------|
| OpenDNS Home3  |  208.67.222.222 |    208.67.220.220 |
| Google         | 8.8.8.8         |  8.8.4.4          |
| GVT (Brazil only) | 200.175.5.139  | 200.175.89.139 |
 

## Troubleshooting

Getting Linux Distribution Name:

```bash
$ cat /etc/lsb-release

DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=14.04
DISTRIB_CODENAME=trusty
DISTRIB_DESCRIPTION="Ubuntu 14.04.1 LTS"
```

Distribution Version:
    
```
$ cat /etc/issue
Ubuntu 14.04.1 LTS \
```

Kernel Version:
```
$ uname -a
Linux tux-I3000 3.13.0-36-generic #63-Ubuntu SMP Wed Sep 3 21:30:45 UTC 2014 i686 i686 i686 GNU/Linux
```
    
Kernel Modules (Equivalent to Windows drivers) Loaded:
```
$ lsmod
```

List USB devices attached:
```
$ lsusb 

Bus 002 Device 003: ID 04ca:700a Lite-On Technology Corp. 
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 004: ID 0a5c:21f4 Broadcom Corp. 
Bus 001 Device 003: ID 045e:0797 Microsoft Corp. Optical Mouse 200
...

```
    
List Network Interfaces / Wifi Dongles/ Wired Connection/ Wifi cards / Network Cards

```
$ ifconfig 
eth1      Link encap:Ethernet  HWaddr b8:88:e3:dd:f3:88  
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:4068 errors:0 dropped:0 overruns:0 frame:0
          TX packets:4068 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:960408 (960.4 KB)  TX bytes:960408 (960.4 KB)

virbr0    Link encap:Ethernet  HWaddr d2:2d:ca:b5:a9:f6  
          inet addr:192.168.122.1  Bcast:192.168.122.255  Mask:255.255.255.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

wlan1     Link encap:Ethernet  HWaddr 20:68:9d:49:27:16  
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          
```
