#!/bin/bash

n_scenes=$1

for ((i=0; i < n_scenes; i++ )); do
    scene_num=$(printf "%03d" $i)
    scene_dir=scene_$scene_num
    echo $scene_dir
    mkdir images/$scene_dir
    mv scenes/$scene_dir/still_frames/*.png images/$scene_dir/
    mv scenes/$scene_dir/*.json images/$scene_dir/
done

