# Intel RealSense

## Firmware Updates

Use the `rs-fw-update` binary installed with the librealsense2 SDK to update the firmware on the camera. For latest firmware downloads, please visit [this page](https://dev.intelrealsense.com/docs/firmware-releases) and match the firmware with your specific RealSense model.

You can also use the GUI tool in `realsense-viewer` to update the firmware.

If you are starting with a new camera, it is recommended to update the firmware to the latest version before beginning development.

## Installation (Prerequisites)

**Important**: Ensure that your kernel matches the versions supported by the `librealsense2-dkms` package if you are not installing from source. Please refer to the [official documentation](https://github.com/IntelRealSense/librealsense/blob/master/doc/distribution_linux.md) for more details.

The following steps must be completed before installing the `librealsense2` SDK through either method.

1. Reboot the system into the UEFI:
   ```sh
   systemctl reboot --firmware-setup
   ```
2. Disable Secure Boot in the UEFI settings.

## Installation (Prebuilt Binaries)

For installation of the `librealsense2` SDK on Ubuntu 22.04, please follow the [official documentation](https://github.com/IntelRealSense/librealsense/blob/master/doc/distribution_linux.md) for installation via distribution package channels.

In general, the following commands should suffice.

> ```sh
> sudo mkdir -p /etc/apt/keyrings
>
> curl -sSf https://librealsense.intel.com/Debian/librealsense.pgp | sudo tee /etc/apt/keyrings/librealsense.pgp > /dev/null
>
> sudo apt-get install apt-transport-https
>
> echo "deb [signed-by=/etc/apt/keyrings/librealsense.pgp] https://librealsense.intel.com/Debian/apt-repo `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/librealsense.list
>
> sudo apt-get update
>
> sudo apt-get install librealsense2-dkms librealsense2-utils librealsense2-dev
> ```

## Installing from Source (Alternative Method)

Installation from source is similar to the documentation provided by Intel.

### Assumptions

Familiarity with the provided [RealSense SDK Manual Linux Installation Instructions](https://github.com/IntelRealSense/librealsense/blob/master/doc/installation.md).

### Install librealsense2 SDK

1. [Install all dependencies for Ubuntu 22.04.](https://dev.intelrealsense.com/docs/compiling-librealsense-for-linux-ubuntu-guide#install-dependencies)
2. Clone the [librealsense](https://github.com/IntelRealSense/librealsense) repo.
   ```sh
   git clone https://github.com/IntelRealSense/librealsense.git && cd librealsense
   ```
3. Run Intel Realsense permissions script from `librealsense2` root directory:
   ```sh
   ./scripts/setup_udev_rules.sh
   ```
4. Build and apply patched kernel modules:
   ```sh
   ./scripts/patch-realsense-ubuntu-lts-hwe.sh
   ```
5. [Build the librealsense2 SDK](https://dev.intelrealsense.com/docs/compiling-librealsense-for-linux-ubuntu-guide#building-librealsense2-sdk) and install the binaries.
   > Use the following build command:
   >
   > ```sh
   > mkdir -p build && cd build
   > cmake ../ -DCMAKE_BUILD_TYPE=Release
   > make && sudo make install
   > ```
6. Follow the instructions for compiling and installing the binaries
   > Tip: Use `-j15` flag in `make` commands for parallel compilation

## Install librealsense2 Python Wrapper

1. There is no need to build the Python wrapper from source. Install the pre-built package with `pip`
   ```sh
   pip install pyrealsense2
   ```
