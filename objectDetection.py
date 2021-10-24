import cv2
import numpy as np
import sys
import os

fileDest = sys.argv[1]
net = cv2.dnn.readNet('yolov3_training_last.weights', 'yolov3_testing.cfg')

classes = []
with open("classes.txt", "r") as f:
    classes = f.read().splitlines()

img = cv2.imread(fileDest)
font = cv2.FONT_HERSHEY_DUPLEX
colors = (118, 172, 255)

height, width, _ = img.shape

blob = cv2.dnn.blobFromImage(img, 1/255, (416, 416), (0,0,0), swapRB=True, crop=False)
net.setInput(blob)
output_layers_names = net.getUnconnectedOutLayersNames()
layerOutputs = net.forward(output_layers_names)

boxes = []
confidences = []
class_ids = []

for output in layerOutputs:
    for detection in output:
        scores = detection[5:]
        class_id = np.argmax(scores)
        confidence = scores[class_id]
        if confidence > 0:
            center_x = int(detection[0]*width)
            center_y = int(detection[1]*height)
            w = int(detection[2]*width)
            h = int(detection[3]*height)

            x = int(center_x - w/2)
            y = int(center_y - h/2)

            boxes.append([x, y, w, h])
            confidences.append((float(confidence)))
            class_ids.append(class_id)

indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.2, 0.4)

if len(indexes)>0:
    maxIdx = np.argmax(confidences)
    hairClass = str(classes[class_ids[maxIdx]])
    # confidence = str(round(confidences[maxIdx],2))
    # x, y, w, h = boxes[maxIdx]
    # color = colors[0]
    # if (w> 100 and h>100):
    #     cv2.rectangle(img, (0, 0), (400, 200), color, -1)
    #     cv2.putText(img, "Hair Type: " + hairClass, (50, 125), font, 1, (255,255,255), 2)
    # else:
    #     cv2.rectangle(img, (0, 0), (w, h), color, -1)
    #     cv2.putText(img, "Hair Type: " + hairClass, (x, y+h/2), font, 2, (255,255,255), 2)

# fileDestPath = fileDest.split('.')[0]
# fileExt = fileDest.split('.')[-1]
# os.rename(fileDest, fileDestPath + '_' + hairClass + '.' + fileExt)
print(hairClass)
sys.exit(hairClass)
# cv2.imshow('Image', img)
# cv2.waitKey()

# cv2.destroyAllWindows()
