---
title: "1st Week"
excerpt: "VIO-SLAM inizialization"

sidebar:
  nav: "docs"

toc: true
toc_label: "TOC installation"
toc_icon: "cog"


categories:
- Week Progress
tags:
- SLAM
- VIO-SDSLAM
- Instalation

author: Pablo Asensio Martínez
pinned: false
---

I had one objetive.

## Compile VIO-SLAM alogorithm

First step: To clone the [repo](https://github.com/javimdr/slam-SD-SLAM)

```bash
git clone https://github.com/javimdr/slam-SD-SLAM
```

Then we need:

```bash
cd slam-SD-SLAM; mkdir build; cd build/
```

And finally:
```bash
cmake ..
make
```

# Cmake errors
We can see different errors while cmake:
- OpenCV 2.4.3 is not located. We can install it thanks following [link](https://github.com/jayrambhia/Install-OpenCV)

```bash
git clone https://github.com/jayrambhia/Install-OpenCV
cd Ubuntu/2.4/
chmod +x opencv2_4_3.sh
./opencv2_4_3.sh
```
- Could not find a configuration file for package "OpenCV".
We can see following error:

```bash
CMake Error at CMakeLists.txt:47 (find_package):
  Could not find a configuration file for package "OpenCV" that is compatible
  with requested version "2.4.3".

  The following configuration files were considered but not accepted:

    /usr/lib/x86_64-linux-gnu/cmake/opencv4/OpenCVConfig.cmake, version: 4.2.0
    /lib/x86_64-linux-gnu/cmake/opencv4/OpenCVConfig.cmake, version: 4.2.0

```
Solution: To change opencv 2.4.3 requirement to 4.2.0
So, we don't need to install opencv 2.4.3
```cmake
46 | find_package(OpenCV 4.2.0 REQUIRED)
```

- Then appears Eigen3 error.

```bash
CMake Error at CMakeLists.txt:50 (find_package):
  By not providing "FindEigen3.cmake" in CMAKE_MODULE_PATH this project has
  asked CMake to find a package configuration file provided by "Eigen3", but
  CMake did not find one.

  Could not find a package configuration file provided by "Eigen3" (requested
  version 3.1.0) with any of the following names:

    Eigen3Config.cmake
    eigen3-config.cmake

```
Solution:
```bash
sudo apt-get install libeigen3-dev
```

- Then appears Pangolin location error (non Covid-19),  which solution can be found [here](https://github.com/stevenlovegrove/Pangolin). We finaly solved all cmake errors.

# Make errors
When makefile is written by cmake, we firtsly see:
- OpenCV fatal error.
```bash
fatal error: opencv/cv.h: No such file or directory
```
This happend because we need to include opencv2. Solution. Change in `slam-SD-SLAM/src/ORBextractor.h`: `#include <opencv/cv.h>` -> `#include <opencv2/opencv.hpp>`


TFM work and author:
- [Algoritmo de autolocalizacion basado en visión y sensor inercial: VIO-SDSLAM](https://gsyc.urjc.es/jmplaza/students/tfm-slam-vio_sdslam-javier_martinez-2020.pdf) by Javier Martínez del Río.

