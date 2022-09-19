

const tooltipsList = document.querySelectorAll('.tooltip')

console.log(tooltipsList)

const tooltip = tooltipsList.forEach(function(element){
   
    const tooltipUrl = element.dataset.url
    const tooltipType = element.dataset.tooltipType
    const tooltipValue = element.dataset.tooltipContent

    const textOFTooltip = element.textContent
    element.textContent = ''
   
    const aOfTooltip = element.appendChild(document.createElement('a'))
    aOfTooltip.setAttribute(
        'href',
        tooltipUrl
    )
    aOfTooltip.textContent = textOFTooltip
   
    const spanOfToolTip = element.appendChild(document.createElement('span'))

    spanOfToolTip.setAttribute('class', 'tooltip__box')

    if(tooltipType === 'text'){
        spanOfToolTip.textContent = tooltipValue
        spanOfToolTip.classList.add('class', 'tooltip__box--text')
    } else if (tooltipType === 'image'){
        const imgOfToolTip = document.createElement('img')
        spanOfToolTip.classList.add('class', 'tooltip__box--image')
        spanOfToolTip.appendChild(imgOfToolTip)
        imgOfToolTip.setAttribute('class', 'tooltip__image')
        imgOfToolTip.setAttribute('src', tooltipValue)
    }

})





