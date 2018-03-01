export const DOM = {
    specimenRptr : document.getElementById('rptrSpecimen'),
    speciesRptr : document.getElementById('rptrSpecies'),
    nextClickEvnt : new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }),
    nextBtn : document.getElementById('btnNext'),
    moreSpecimensBtn : document.getElementById('btnMoreSpecimens'),
    totalTxt : document.getElementById('txtTotal'),
    correctTxt : document.getElementById('txtCorrect'),
    messageTxt : document.getElementById('txtMessage')
};
