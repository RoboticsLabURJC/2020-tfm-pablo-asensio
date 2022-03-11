---
title: "3D Visual Odometry. Preimplementation"
excerpt: "Visual odometry consists of calculating the rotation and translation of the camera from a set of points extracted from two images. It is an incremental technique, since it is based on the previous position to calculate the new one."

sidebar:
  nav: "docs"

toc: false
toc_label: "Index"
toc_icon: "cog"

classes: wide

header:
  teaser: /assets/images/visual-odometry/An-example-of-a-monocular-visual-odometry-system-The-relative-poses-Tnm-between-cameras.png
  teaser_home_page: true
  # overlay_image: /assets/images/visual-odometry/An-example-of-a-monocular-visual-odometry-system-The-relative-poses-Tnm-between-cameras.png

categories:
- 3D Visual Odometry
tags:
- 3D Visual Odometry
- Visual Odometry
- 3D

author: Pablo Asensio Martínez
pinned: false
---


## Problema

La odometría visual consiste en calcular la rotación y traslación de la cámara a partir de un conjunto de puntos extraı́dos de dos imágenes. Se trata de una técnica incremental, ya que se basa en la posición anterior para calcular la nueva.

<img align="center" alt="Visual Odometry" width="600" src="/assets/images/visual-odometry/An-example-of-a-monocular-visual-odometry-system-The-relative-poses-Tnm-between-cameras.png" />
