export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
        [
            'src/assets/textures/environmentMap/px.jpg',
            'src/assets/textures/environmentMap/nx.jpg',
            'src/assets/textures/environmentMap/py.jpg',
            'src/assets/textures/environmentMap/ny.jpg',
            'src/assets/textures/environmentMap/pz.jpg',
            'src/assets/textures/environmentMap/nz.jpg'
        ]
    },
    {
        name: 'grassColorTexture',
        type: 'texture',
        path: 'src/assets/textures/dirt/color.jpg'
    },
    {
        name: 'grassNormalTexture',
        type: 'texture',
        path: 'src/assets/textures/dirt/normal.jpg'
    },
    {
        name: 'foxModel',
        type: 'gltfModel',
        path: 'src/assets/models/Fox/glTF/Fox.gltf'
    }
]