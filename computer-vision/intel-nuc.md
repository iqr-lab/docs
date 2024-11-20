# Intel NUC

This document covers all initial setup details for each NUC edge device in the distributed pointcloud stitching system.

## Prerequisite

1. Disable Secure Boot in UEFI (F2 hotkey at POST)
2. Enable Display Emulation under Advanced -> Video in UEFI
3. An Internet Connection

## Ubuntu

As of the time of writing, it is simplest to install [Ubuntu 22.04.3](https://old-releases.ubuntu.com/releases/22.04.3/) specifically. This is because it comes installed with kernel 6.2, which is by default supported by the Intel Realsense distribution builds. It is safest to avoid updating system components and software after initial OS installation, since `librealsense` is dependent on kernel modules and RustDesk uses virtual display emulation.

## Intel Realsense

Ensure that your kernel version (`uname -r`) is supported by the `librealsense-dkms` package [here](https://github.com/IntelRealSense/librealsense/blob/master/doc/distribution_linux.md#using-pre-build-packages).

If not, please follow the following section on downgrading your kernel **BEFORE** installing `librealsense`.

Please install `librealsense` from distribution following [Intel Realsense](https://iqr.cs.yale.edu/docs/computer-vision/intel-realsense.html). Note the manual installation step required for NUCs only.

## Kernel Downgrade

1. Install Mainline
   > ```sh
   > sudo apt-add-repository -y ppa:cappelikan/ppa
   >
   > sudo apt update
   >
   > sudo apt install mainline
   > ```
2. Install the downgraded kernel via the Mainline GUI App
3. Reboot and hold `Esc` to access the GRUB menu

   Hint: If you held `Esc` for too long (which is very likely), you will enter the GRUB prompt instead. Execute `normal`, then tap `Esc` until the menu shows up

4. Boot from the downgraded kernel in the Advanced Ubuntu Boot Options
5. Uninstall any newer kernels from Mainline so that Ubuntu boots to the downgraded kernel by default.

   Hint: You may need to uninstall some `generic-hwe` image/headers packages before this step. If this is the case, use

   > ```sh
   > dpkg --list | grep linux-image # to find the exact package name of linux-image-xxx
   > sudo apt-get purge linux-image-xxx
   > ```

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

Additionally, you may find it beneficial down the line to physically label the NUCs with their corresponding index. Please use the label maker as necessary.

## Remote Access

### SSH

Please follow standard SSH key generation (`ssh-keygen`) and installation methods (`ssh-copy-id`). Since we have already set the hostname, it should be used as `iqr-vision-i.local` when using `ssh`.

Please also modify `~/.ssh/config` with the proper host configuration. Doing this avoids having to specify the SSH key in the `ssh` connect command. This is an important step as the `host.py` utility assumes this.

If you are expecting to do active development on `pointcloud_stitching`, please see [this section](https://iqr.cs.yale.edu/docs/computer-vision/pointcloud-stitching.html#camera-edge-server) on setting up the central computer FS mount.

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

## Environment setup

Although most of the choices here are a matter of personal perference from experience, it is best to make all edge device environments consistent to avoid unnecessary headaches.

### Shell

The shell of choice is `fish`. Please install `fish` following the instructions [here](https://launchpad.net/~fish-shell/+archive/ubuntu/release-3). To set it as the default shell, run `chsh -s $(which fish)` inside `bash`.

To make `fish` more extensible, we additionally install Oh My Fish (`omf`) and Bass. Please install sequentially by following instructions [here](https://github.com/oh-my-fish/oh-my-fish?tab=readme-ov-file#installation) then [here](https://github.com/edc/bass?tab=readme-ov-file#with-oh-my-fish).

### Python

For Python, there is no need to complicate the installation environments of the edge device with `conda`. The `python3` interpreter should automatically be installed from the distribution package manager.

Please note that `python` does not and should not resolve (unless the virtual environment is activated).

### UV

#### Installation & Configuration

We use `uv` over `pip` as the Python package manager of choice. Please install it by following the instructions [here](https://github.com/astral-sh/uv?tab=readme-ov-file#getting-started). When it comes to augmenting the shell startup file, please add the following line to `~/.config/fish/config.fish`:

> ```bash
> bass . "$HOME/.cargo/env"
> ```

Please restart your shell session for `uv` to be available.

### Usage

As a general rule of thumb, create virtual environments whenever starting new Python projects. The location of the virtual environment is up to your discretion, but do create meaningful names for them.

For example, the calibration Python venv is named `~/calibration_venv`. Specify the name of the venv upon creation like so:

> ```bash
> uv venv [venv_path]
> ```

Activate the desired virtual venv when needed like so:

> ```bash
> source [venv_path]/bin/activate.fish
> ```

## Conclusion

Upon successful setup, make sure to update `pointcloud_stitching/HOSTS` with the new hostname.
