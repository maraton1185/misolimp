function Menu(){
    
    this.blockquote = "",
    this.cite = "",
      
    this.nav = [
       /* {ref: '/', name: 'Главная',  visible: true,
			blockquote: '"Это всегда кажется невозможным, пока это не сделано"',
			cite: 'Нельсон Мандела'}	 */
        ],
   
    this.setActive = function(ref) {
        
        this.nav.forEach(function(item, index, array) {
            if(item.ref==ref) {
                item.active = true;
                this.blockquote = item.blockquote;
                this.cite = item.cite;
            } else {
                item.active = false;
            };
        }, this)          
    };
};
 
module.exports = new Menu();