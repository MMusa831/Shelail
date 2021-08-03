import './cover.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Twitter,Facebook,Instagram } from '@material-ui/icons';

function gallery() {

  

  return (
    <body class="cover-header hight-100 text-center text-white bg-light">
    
<div class="cover-container d-flex w-100 h-100  mx-auto flex-column">

  <main class="cover-body">
    <h1>Shlail-academy/أكاديمية شليل</h1>
    <p class="lead">كاديمية شليل للرياضة وتنمية القدرات
أكاديمية رياضية تعليمية تربوية تنشط في كرة القدم فتيات وفتيان وكذلك كرة الريشة الطائره وقريبا سيتم افتتاح مناشط العاب القوي والكرة الطائرة والسلة والسباحة</p>
    <p class="lead">
      <a href="/more" class="btn">المزيد من المعلومات</a>
    </p>
  </main>

  <footer class="mt-auto">
  <p class="social-icons">
         <ul>
              <a className="fa" href="https://www.facebook.com/shlailacademy"><Facebook/></a>
              <a className="tw" href="https://www.twitter.com/shlail_acadeemy"><Twitter/></a>
              <a className="in" href="https://www.instagram.com/shlail_acadeemy"><Instagram/></a>
         </ul> 
        </p>
  </footer>
</div>


    
  </body>
  );
}

export default gallery;