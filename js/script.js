function imgSlider(anything){
    document.querySelector(".bewow").src = anything;
};
  
// a classe .pepsi só é encontrada pela funçao 
// se estiver declarada no css
  
function changeBgColor(color){
    const sec = document.querySelector(".sec");
    sec.style.background = color;

    if(color=='#6fe7ff'){
        document.querySelector('.textBox-h2').style.color = '#002c85'
        document.querySelector('.textBox-p').style.color = '#002c85'

        document.querySelector('.toggleMenu').style.filter = 'invert(0)'
    }
    else{
        document.querySelector('.textBox-h2').style.color = '#FFFFFF'
        document.querySelector('.textBox-p').style.color = '#FFFFFF'
        
        document.querySelector('.toggleMenu').style.filter = 'invert(1)'
    }

};
  
function menuToggle(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}