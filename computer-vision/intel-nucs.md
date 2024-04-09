# Intel NUCS

This document covers all initial setup details for each NUC edge device in the distributed pointcloud stitching system.

## Prerequisite

1. Disable Secure Boot in UEFI (F2 hotkey at POST)
2. Enable Display Emulation under Advanced -> Video
3. An Internet Connection

## Intel Realsense

Please install `librealsense` from distribution following [`/computer-vision/intel-realsense.md`](https://iqr.cs.yale.edu/docs/computer-vision/intel-realsense.html). Note the manual installation step required for NUCs only.

## Networking

We establish **`i`** as the corresponding device number, indexed by 1.

Ensure that the ethernet cable is connected to a port with a native `Vision Subnet` tag. For exact port mappings, please check the UniFi controller configuration. As of the time of writing, the top row of the 2.5Gbps ports are all natively tagged to the `Vision Subnet`

### IP Address Assignment

The easiest way to configure manual IP assignment is through the Settings app. Please configure a wired IPv4 profile with the following specs:

- IPv4 Method: Manual
- Address: `192.168.2.[7 + i]`
- Netmask: `255.255.255.0`
- Gateway: `192.168.2.1`

### Hostname

For ease of access, please configure the hostname as necessary.

> ```sh
> hostnamectl set-hostname iqr-vision-i
> ```

## Remote Access

### SSH

Please follow standard SSH key generation (`ssh-keygen`) and installation methods (`ssh-copy-id`). Since we have already set the hostname, it should be used as `iqr-vision-i.local`.

### Remote Desktop

The remote desktop software of choice is RustDesk.

There are variety of reasons for this choice over AnyDesk but the following are the critical ones:

- Virtual Display Compatibility
  - AnyDesk throws an Unsupported Display Server error under headless operation
- Speed & Performance
  - RustDesk empirically displays significantly lower input latency and higher visual quality

#### Installation & Configuration

1. Follow the [reference install steps](https://rustdesk.com/docs/en/client/linux/)
2. Once installed, open RustDesk and set a permanent password under the Security tab

   Hint: It is usually set to the `lab` password but capatalized

3. [Disable Wayland login](https://rustdesk.com/docs/en/client/linux/#login-screen)
4. Open Settings -> Display
5. Set the display scheme to Mirror Display

   Hint: Setting the resolution now only impacts the virtual display (the RustDesk display) when headless
