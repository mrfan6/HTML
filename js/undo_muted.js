function undo_Muted(){
    var imButton=document.getElementById("undo_Muted");
    if (!myVideo.muted){
    	 myVideo.muted=true;
        imButton.innerHTML="播放声音";
       
    }
    else{
        myVideo.muted=false;
        imButton.innerHTML="静音";
    }
}