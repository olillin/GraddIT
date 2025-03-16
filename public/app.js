/** @type {HTMLInputElement} */
const gradde = document.getElementById('gradde')
/** @type {HTMLInputElement} */
const bla = document.getElementById('bla')
/** @type {HTMLInputElement} */
const gron = document.getElementById('gron')

const ratios = {
    gradde: 1,
    bla: 5,
    gron: 2.5,
}

gradde?.addEventListener('change', e => {
    const value = e.currentTarget.value
    bla.value = ratios.bla * value / ratios.gradde
    gron.value = ratios.gron * value / ratios.gradde
})
bla?.addEventListener('change', e => {
    const value = e.currentTarget.value
    gradde.value = ratios.gradde * value / ratios.bla
    gron.value = ratios.gron * value / ratios.bla
})
gron?.addEventListener('change', e => {
    const value = e.currentTarget.value
    gradde.value = ratios.gradde * value / ratios.gron
    bla.value = ratios.bla * value / ratios.gron
})

gradde.dispatchEvent(new Event('change'))