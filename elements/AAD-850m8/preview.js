function(instance, properties) {
    
    console.log('preview settings');
    
    let div = document.createElement('div');
    div.innerText = 'DROPDOWN';

    // Set div style
    div.style.fontFamily = properties.bubble.font_face().split(':::')[0];
    div.style.fontSize = properties.bubble.font_size() + 'px';
    div.style.color = properties.bubble.font_color();
    
    // Ensure div appears above all other elements
    div.style.position = 'absolute';
    div.style.zIndex = '9999'; // High z-index to bring it above other elements
    
    instance.canvas.append(div);
    console.log(properties.bubble.font_face().split(':::')[0]);
}
