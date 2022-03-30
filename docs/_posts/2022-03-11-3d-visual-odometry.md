---
title: "3D Visual Odometry. Preimplementation"
excerpt: "Visual odometry consists of calculating the rotation and translation of the camera from a set of points extracted from two images. It is an incremental technique, since it is based on the previous position to calculate the new one."

sidebar:
  nav: "docs"

toc: false
toc_label: "Index"
toc_icon: "cog"

classes: wide

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

<img align="center" alt="Triangulation" width="600" src="/2020-tfm-pablo-asensio/assets/images/visual-odometry/map.png" />

Lo que se quiere obtener es que a partir de una sucesión de imágenes, se consiga seguir la trayectoria que describe la cámara en el vídeo.

Concretamente, en este sub-problema se persigue la creación de un ejercicio de referencia, así como su la *auto-corrección* de otros ejercicios, fuera de la aplicación de RoboticsAcademy.

Vamos a hablar un poco sobre la odometría visual.

## Odometría Visual

La odometría visual consiste en calcular la rotación y traslación, *pose (**R, t**)*, de la cámara a partir de un conjunto de puntos extraídos de dos imágenes. Se trata de una técnica incremental, ya que se basa en la posición anterior para calcular la pose del segundo frame.

<img align="center" alt="Visual Odometry" width="600" src="/2020-tfm-pablo-asensio/assets/images/visual-odometry/An-example-of-a-monocular-visual-odometry-system-The-relative-poses-Tnm-between-cameras.png" />

Para ello se puede seguir la siguiente estrategia:

- Adquisición de dos frames consecutivos.
- Detectar sus características. Usa la forma que más te guste.
- Relacionar las características de la primera imagen con la segunda. Hay dos métodos:
  - Correlación.
  - Flujo Óptico.
- Encontrar la matriz esencial, así como la rotación y traslación asociada.
- Averiguar la escala en caso de que sea odometría visual monocular.
- Actualizar las matrices *R, t* del movimiento absoluto.

### Visor

<img align="center" alt="Visual Odometry" width="600" src="/2020-tfm-pablo-asensio/assets/images/visual-odometry/visor/visor.png" />

Para la realización del visor se ha dedicido hacerlo con [Three.js](https://threejs.org/). Actualmente solo se puede mover la cámara por el mundo.
Se puede consultar el código [aquí](https://github.com/PabloAsensio/MonocularVisualOdometry/tree/main/frontend). Donde el código principal es *script.js*.
