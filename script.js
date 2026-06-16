:root{

--primary:#0F4C5C;
--secondary:#FF8C42;
--accent:#6CC4A1;
--light:#F8F6F2;
--dark:#1E293B;

}

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{
background:var(--light);
overflow-x:hidden;
color:var(--dark);
}

.blob{
position:fixed;
border-radius:50%;
filter:blur(90px);
opacity:.25;
z-index:-1;
}

.blob1{
width:400px;
height:400px;
background:var(--accent);
top:-100px;
left:-100px;
}

.blob2{
width:450px;
height:450px;
background:var(--secondary);
right:-150px;
top:30%;
}

.blob3{
width:350px;
height:350px;
background:var(--primary);
bottom:-100px;
left:25%;
}

.fact-bar{

background:
linear-gradient(
90deg,
var(--secondary),
var(--primary)
);

padding:15px;
text-align:center;
color:white;
font-weight:600;
}

header{

background:
linear-gradient(
135deg,
#0F4C5C,
#145374,
#1B6B75
);

color:white;
padding:20px 10%;
}

nav{

display:flex;
justify-content:space-between;
align-items:center;

}

.logo{
font-size:28px;
font-weight:700;
}

nav ul{
display:flex;
gap:25px;
list-style:none;
}

nav a{
color:white;
text-decoration:none;
}

.hero{

display:flex;
justify-content:space-between;
align-items:center;
padding:80px 0;
flex-wrap:wrap;

}

.hero h1{
font-size:4rem;
margin-bottom:20px;
}

.hero p{
font-size:1.1rem;
max-width:500px;
margin-bottom:30px;
}

.btn{

background:var(--secondary);
padding:15px 35px;
border-radius:30px;
color:white;
text-decoration:none;
font-weight:600;

}

.hero-image{
position:relative;
}

.hero-image img{
width:350px;
}

.floating-card{

position:absolute;
background:white;
padding:12px 20px;
border-radius:20px;
color:black;
box-shadow:0 5px 20px rgba(0,0,0,.15);
top:20px;
right:-40px;

}

.second{
top:auto;
bottom:30px;
left:-30px;
}

section{
padding:80px 10%;
}

h2{
text-align:center;
font-size:2.5rem;
margin-bottom:30px;
color:var(--primary);
}

.section-text{
max-width:900px;
margin:auto;
text-align:center;
}

.features,
.service-grid,
.process-grid,
.session-grid{

display:grid;
grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));

gap:25px;
margin-top:40px;
}

.card,
.service-box,
.step,
.session-card{

background:
rgba(255,255,255,.75);

backdrop-filter:blur(10px);

padding:30px;

border-radius:20px;

box-shadow:
0 10px 30px rgba(0,0,0,.08);

transition:.3s;
}

.card:hover,
.service-box:hover,
.step:hover{
transform:translateY(-10px);
}

.service-box img{
width:100%;
height:250px;
object-fit:cover;
border-radius:15px;
margin-bottom:15px;
}

.service-box ul{
padding-left:20px;
line-height:2;
}

.stats{

display:flex;
justify-content:center;
gap:80px;
text-align:center;
flex-wrap:wrap;

}

.stats h2{
color:var(--secondary);
font-size:3rem;
}

.sessions{

background:
linear-gradient(
135deg,
#0F4C5C,
#145374
);

color:white;

}

.sessions h2{
color:white;
}

.mentor{
text-align:center;
}

.contact{
text-align:center;
}

.contact-btn{

display:block;

width:fit-content;

margin:15px auto;

background:var(--secondary);

padding:15px 25px;

border-radius:30px;

text-decoration:none;

color:white;

}

footer{

background:var(--primary);

padding:20px;

text-align:center;

color:white;

}

.whatsapp{

position:fixed;

bottom:25px;
right:25px;

width:65px;
height:65px;

background:#25D366;

border-radius:50%;

display:flex;
justify-content:center;
align-items:center;

font-size:30px;

color:white;

text-decoration:none;

box-shadow:
0 5px 20px rgba(0,0,0,.3);

}

@media(max-width:768px){

.hero{
text-align:center;
}

.hero h1{
font-size:2.5rem;
}

.hero-image img{
width:250px;
margin-top:30px;
}

nav{
flex-direction:column;
gap:15px;
}

}
