function(instance, properties) {
    
    console.log('preview settings')
    
    let div = document.createElement('div')
    div.innerText = 'DROPDOWN'

    // div style 
    div.style.fontFamily = properties.bubble.font_face().split(':::')[0]
    div.style.fontSize = properties.bubble.font_size()+'px'
    div.style.color = properties.bubble.font_color()
    instance.canvas.append(div)
    console.log(properties.bubble.font_face().split(':::')[0])


}