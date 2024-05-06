# Kalibr

This document covers the setup of [Kalibr](https://github.com/ethz-asl/kalibr) for calibrating the extrensics for each camera.

## Installation

Please follow the `Docker` image instructions [here](https://github.com/ethz-asl/kalibr/wiki/installation).

Note: If using `Docker Desktop`, you might need to tune your Docker resource allocation for the image to build properly. A tested, working configuration is 10 CPU core limit and 10GB RAM limit. You also need to add `/tmp/.X11-unix` as a virtual file share under Settings->Resources->File Sharing.

## Calibration Target

We currently use a custom calibration target available [here](https://github.com/iqr-lab/pointcloud_stitching/blob/master/calibration/custom_target.pdf)

Alternatively, you can generate the target PDF yourself by running inside the container:

```sh
source devel/setup.bash
rosrun kalibr kalibr_create_target_pdf --type apriltag --nx 5 --ny 5 --tsize 0.06 --tspace 0.3
```

When printing, ensure that the printed size is true to the file. Attach the target to a rigid surface for proper calibration.
