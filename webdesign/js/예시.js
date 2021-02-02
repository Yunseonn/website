var f = function(){
    
    function Draggable(element,dragStart,dragDrop){
        this.element = element;
        this.dragStart = dragStart;
        this.dragDrop = dragDrop;

        this.element.classList.add('draggable');
        var self = this;

        var move = function(event){
            //if(self.dragStart !== undefined){ self.dragStart();}
           //don't bubble this event - mousedown
            event.stopPropagation();
            //prevent any default action
            event.preventDefault();

            var originalLeft = parseInt(window.getComputedStyle(this).left);
            var originalTop = parseInt(window.getComputedStyle(this).top);

            var mouseDownX = event.clientX;
            var mouseDownY = event.clientY;

            function dragMe(event){
                self.element.style.left = originalLeft + event.clientX - mouseDownX + "px";
                self.element.style.top = originalTop + event.clientY - mouseDownY + "px";
                event.stopPropagation();
            }

            function dropMe(event){
                document.removeEventListener('mousemove',dragMe,true);
                document.removeEventListener('mouseup',dropMe,true);
                //if(self.dragDrop !== undefined){ self.dragDrop();}
                event.stopPropagation();
            }

            document.addEventListener('mouseup',dropMe,true);
            document.addEventListener('mousemove',dragMe,true);

        };

        this.element.addEventListener('mousedown',move,false);

    }

    var dragStart = function(){
        this.element.style.width = parseInt(window.getComputedStyle(this.element).width) * 1.3 + "px";
    }
    var dragDrop = function(){
        this.element.style.width = parseInt(window.getComputedStyle(this.element).width) * (100/130) + "px";
    }




    var imageElement4 = document.getElementsByTagName('img')[4];
    var imageElement5 = document.getElementsByTagName('img')[5];
    var imageElement6 = document.getElementsByTagName('img')[6];
    var imageElement7 = document.getElementsByTagName('img')[7];
    var imageElement8 = document.getElementsByTagName('img')[8];
    var imageElement9 = document.getElementsByTagName('img')[9];
    var imageElement10 = document.getElementsByTagName('img')[10];
    var imageElement11 = document.getElementsByTagName('img')[11];
    /*var imageElement12 = document.getElementsByTagName('img')[12];
    var imageElement13 = document.getElementsByTagName('img')[13];
    var imageElement14 = document.getElementsByTagName('img')[14];*/

    
    var dragObject4 = new Draggable(imageElement4,dragStart,dragDrop);
    var dragObject5 = new Draggable(imageElement5,dragStart,dragDrop);
    var dragObject6 = new Draggable(imageElement6,dragStart,dragDrop);
    var dragObject7 = new Draggable(imageElement7,dragStart,dragDrop);
    var dragObject8 = new Draggable(imageElement8,dragStart,dragDrop);
    var dragObject9 = new Draggable(imageElement9,dragStart,dragDrop);
    var dragObject10 = new Draggable(imageElement10,dragStart,dragDrop);
    var dragObject11 = new Draggable(imageElement11,dragStart,dragDrop);
  /*var dragObject12 = new Draggable(imageElement12,dragStart,dragDrop);
    var dragObject13 = new Draggable(imageElement13,dragStart,dragDrop);
    var dragObject14 = new Draggable(imageElement14,dragStart,dragDrop);*/

    
};

window.addEventListener('load',f,false);