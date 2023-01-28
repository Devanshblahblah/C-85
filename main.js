canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

nasa_image_array = [ "mars.jpg" , "nasa-1.jpeg" , "nasa-2.jpg" , "nasa-3.jpg" , "nasa-4.jpg"];
random_number=Math.floor( Math.random() * 5);
rw=100;
rh=90;

background_image=nasa_image_array[random_number];
rover_image="rover.png";

rx=10;
ry=10

function add()
{
    background_imgTag=new Image() ;
    background_imgTag.onload=uploadBackGround;
    background_imgTag.src=background_image;

    rover_imgTag=new Image() ;
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadBackGround()
{
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag , rx , ry , rw , rh);
}

window.addEventListener( "keydown" , my_KeyDown);

function my_KeyDown(e)
{
    kp=e.keyCode;
    console.log(kp);

    if( kp == '38')
    {
        up();
        console.log("Up Key Pressed");
    }

    if( kp == '40')
    {
        down();
        console.log("Down Key Pressed");
    }

    if( kp == '39')
    {
        right();
        console.log("Right Key Pressed");
    }

    if( kp == '37')
    {
        left();
        console.log("Left Key Pressed");
    }
}

function up()
{
    if( ry >= 0)
    {
        ry = ry - 10;
        uploadBackGround();
        uploadRover();
    }
}

function down()
{
    if( ry <= 500)
    {
        ry = ry + 10;
        uploadBackGround();
        uploadRover();
    }
}

function left()
{
    if( rx >= 0)
    {
        rx = rx - 10;
        uploadBackGround();
        uploadRover();
    }
}

function right()
{
    if( rx <= 700)
    {
        rx = rx + 10;
        uploadBackGround();
        uploadRover();
    }
}
