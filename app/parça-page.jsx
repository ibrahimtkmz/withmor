"use client";

import { useState, useEffect } from "react";
import Icons from "../components/Icons";
import ElevatorAnimation from "../components/ElevatorAnimation";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tab State
  const [activeAboutTab, setActiveAboutTab] = useState("biz-kimiz");
  const [isExpanded, setIsExpanded] = useState(false);

  // Göster/Gizle State'leri
  const [showAllReferences, setShowAllReferences] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [visibleReviewCount, setVisibleReviewCount] = useState(3);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    projectType: "Malzeme teklifi iste",
    floorCount: "",
    location: "",
    note: "",
  });

  const [fastContactForm, setFastContactForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [hero, setHero] = useState({
    eyebrow: "Premium Asansör Çözümleri",
    title: "Güvenli ve Estetik Dikey Ulaşım Mühendisliği",
    subtitle:
      "Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye’nin her yerinden 24 saat 444 37 59 numaralı hat üzerinden ulaşılabilen mühendislik ve servis çözümleri.",
    cta: "Proje Teklifi Al",
    secondaryCta: "Referanslarımızı İnceleyin",
  });

  // GALERİ İÇİN STATE - DÜZELTİLDİ (19 Adet Resim)
  const [galleryImages, setGalleryImages] = useState(
    Array.from({ length: 19 }, (_, i) => `/images/gallery/galeri-${i + 1}.jpg`)
  );

  // YENİ STATE: Görünecek Galeri Resmi Sayısı
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(8);

  const [aboutTabs, setAboutTabs] = useState({
    "biz-kimiz": {
      title: "Biz Kimiz",
      heading: "Mühendislik Temelli Çözüm Ortağınız",
      subHeading: "30 Yıllık Tecrübeyle Dikey Ulaşımda Güven...",
      text1:
        "İstanbul'un dinamik atmosferinde, asansör sektöründe 30 yıldır mühendislik odaklı çözümler üretiyoruz. Özveriyle, tutkuyla ve teknik uzmanlıkla şekillendirdiğimiz projelerimizde, sadece bir asansör değil, güvenli bir yolculuk deneyimi sunuyoruz.",
      text2:
        "Montaj ve modernizasyonun ötesinde, EN-81 standartlarına tam uyumlu, enerji verimliliği yüksek sistemler tasarlıyoruz.",
      longText:
        "Withmor olarak, dikey ulaşım sektöründeki yolculuğumuza 30 yılı aşkın bir süre önce başladık. Kurulduğumuz günden bu yana, sadece bir asansör firması olmanın ötesine geçerek, binaların yaşam damarlarını inşa eden bir mühendislik partneri olmayı hedefledik. Globalleşen dünyada teknolojiyi yakından takip eden Ar-Ge ekibimiz, yerel üretim gücümüzü uluslararası standartlarla birleştiriyor. Müşteri memnuniyetini merkeze alan yaklaşımımızla, konutlardan gökdelenlere, hastanelerden alışveriş merkezlerine kadar geniş bir yelpazede güvenli, konforlu ve enerji verimliliği yüksek çözümler sunuyoruz. Geleceğin akıllı şehirlerine uyumlu, sürdürülebilir ve estetik asansör sistemlerimizle, Türkiye'den dünyaya açılan bir teknoloji köprüsü kurmanın gururunu yaşıyoruz.",
    },
    imalat: {
      title: "İmalat",
      heading: "Yüksek Kaliteli Üretim Standartları",
      subHeading: "Projeye Özel İmalat Çözümleri...",
      text1:
        "Kendi tesislerimizde, uluslararası kalite standartlarına uygun olarak kabin, karkas ve süspansiyon sistemleri imalatı gerçekleştiriyoruz.",
      text2:
        "Modern tezgahlarımız ve uzman üretim kadromuzla, her projenin teknik gereksinimlerine uygun, dayanıklı ve estetik imalatlar yapıyoruz.",
      longText:
        "Ergene OSB'de yer alan modern üretim tesisimiz, endüstri 4.0 standartlarına uygun makine parkuru ile donatılmıştır. Yüksek hassasiyetli lazer kesim makineleri, CNC abkant büküm tezgahları ve robotik kaynak sistemlerimiz sayesinde, milimetrik hassasiyette üretim gerçekleştiriyoruz. Kullandığımız her hammadde, giriş kalite kontrol testlerinden geçirilerek üretim hattına alınır. Kabin karkaslarından süspansiyon sistemlerine, ağırlık şaselerinden kapı mekanizmalarına kadar tüm bileşenler, uzun yıllar sorunsuz çalışacak dayanıklılıkta tasarlanır ve üretilir. Sadece standart ürünler değil, mimari projenize özel, sıra dışı ölçü ve formlardaki asansör bileşenlerini de kendi bünyemizde, esnek üretim kabiliyetimizle hayata geçiriyoruz.",
    },
    montaj: {
      title: "Montaj",
      heading: "Kusursuz Kurulum ve Devreye Alma",
      subHeading: "Güvenli ve Hızlı Montaj Süreçleri...",
      text1:
        "Sertifikalı montaj ekiplerimiz, şantiye güvenliğini ön planda tutarak asansör sistemlerinin kurulumunu titizlikle gerçekleştirir.",
      text2:
        "Ray montajından motor grubu yerleşimine, kumanda panosu bağlantılarından son kontrollere kadar her aşama mühendis denetiminde ilerler.",
      longText:
        "Montaj süreçlerimiz, sahadaki en kritik aşamadır ve sıfır hata prensibiyle yönetilir. Proje başlangıcında, şantiye şeflerimiz tarafından yapılan detaylı kuyu rölöve çalışmaları ile sürprizlere yer bırakmıyoruz. Rayların lazer hizalama ile montajından, motor grubunun titreşimsiz yerleşimine kadar her adım, EN-81-20/50 standartlarına sıkı sıkıya bağlı kalınarak yürütülür. İş güvenliği, ekiplerimiz için vazgeçilmez bir önceliktir; tüm personelimiz yüksekte çalışma ve iş güvenliği sertifikalarına sahiptir. Montaj sonrası, bağımsız kalite kontrol birimimiz tarafından yapılan kapsamlı testler ve yük denemeleri ile asansörünüzün en yoğun trafik koşullarında bile performansından ödün vermeden çalışacağını garanti altına alıyoruz.",
    },
    tasarim: {
      title: "Tasarım",
      heading: "Estetik ve Fonksiyonelliğin Uyumu",
      subHeading: "Yenilikçi Kabin ve Kuyu Tasarımları...",
      text1:
        "Mimari projenizle bütünleşen, modern ve şık kabin tasarımları sunuyoruz. 3D modelleme teknolojileri ile üretim öncesi görselleştirme sağlıyoruz.",
      text2:
        "Mühendislerimiz, kuyu optimizasyonu yaparak mevcut alandan en yüksek verimi almanızı sağlayacak teknik tasarımlar geliştirir.",
      longText:
        "Tasarım felsefemiz, teknolojiyi estetikle buluşturarak kullanıcı deneyimini zirveye taşımaktır. İç mimarlarımız ve endüstriyel tasarımcılarımız, binanızın karakterine uygun, paslanmaz çelik, cam, ahşap ve doğal taş gibi premium malzemeleri harmanlayarak özgün kabin iç mekanları yaratır. Fonksiyonel açıdan ise mühendislerimiz, trafik analizleri yaparak binanızın insan akışını en verimli şekilde yönetecek hız ve kapasite hesaplamalarını gerçekleştirir. 3 boyutlu simülasyonlarımız sayesinde, asansörünüzün bitmiş halini henüz üretim aşamasına geçmeden sanal ortamda deneyimlemenize olanak tanıyoruz. Panoramik cam kapsüllerden, yük asansörlerinde dayanıklılığı ön planda tutan endüstriyel tasarımlara kadar her detay, Withmor imzasını taşır.",
    },
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: "Withmor",
    about:
      "Withmor, ulusal ve uluslararası standartlara (EN-81) uygun asansör sistemleri tasarlar, üretir ve anahtar teslim kurulum gerçekleştirir. Güvenlik, dayanıklılık ve konforu mühendislik hassasiyetiyle birleştiriyoruz.",
    phone: "444 37 59",
    gsm: "0 555 888 33 59",
    email: "info@withmor.com.tr",
    address: "Ergene OSB, Çorlu / Tekirdağ",
    facebook: "https://www.facebook.com/TEKNIKALIFT",
    instagram: "https://www.instagram.com/withmorlift/",
    whatsapp: "https://wa.me/905558883359",
  });

  // HİZMETLER İÇİN STATE - ...
  const [services, setServices] = useState([
    {
      id: "hidrolik-yuk",
      name: "Hidrolik Yük Asansörü",
      desc: "Ağır sanayi ve depolar için yüksek taşıma kapasitesine sahip, dayanıklı ve güvenli hidrolik kaldırma çözümleri.",
      image: "/images/services/hidrolik-yuk.jpg",
      longDesc:
        "Hidrolik yük asansörleri, özellikle sanayi tesisleri, lojistik depoları ve üretim hatları gibi ağır hizmet gerektiren alanlarda maksimum güvenlik ve dayanıklılık sunmak için tercih edilir. Withmor hidrolik yük asansörleri, yüksek taşıma kapasiteleri, sessiz çalışma karakteristikleri ve titreşimsiz kalkış-duruş kabiliyeti ile operatörlerin işini kolaylaştırırken, ürünlerinizin hasarsız ve kontrollü bir şekilde taşınmasını sağlar. Güçlü hidrolik üniteler, aşırı yük koruma sistemleri ve EN-81 standartlarına uygun emniyet bileşenleri sayesinde, en yoğun çalışma koşullarında dahi güvenilir performans elde edilir. Mevcut bina altyapısına uyumlu, projeye özel kuyu ve platform tasarımlarıyla hem yeni yatırımlarda hem de modernizasyon projelerinde ideal çözümler sunuyoruz. Hidrolik yük asansörlerimiz, uzun ömürlü kullanım ve düşük bakım maliyeti hedeflenerek tasarlanmakta, ağır sanayi ortamlarının zorlu koşullarına dayanacak şekilde üretilmektedir.",
    },
    {
      id: "mrl-yuk",
      name: "Makine Dairesiz Yük Asansörü",
      desc: "Bina hacminden tasarruf sağlayan, dişlisiz motor teknolojisiyle enerji verimli ve sessiz çalışan yük asansörleri.",
      image: "/images/services/mrl-yuk.jpg",
      longDesc:
        "Makine dairesiz yük asansörleri, modern mimarinin gerektirdiği alan verimliliğini sağlarken, işletmeler için enerji tasarrufu ve düşük işletme maliyeti avantajı sunar. Withmor MRL yük asansörleri, dişlisiz motor teknolojisi sayesinde daha az enerji tüketir, sessiz çalışma karakteri ile kullanıcı konforunu artırır ve bina içinde ekstra makine dairesi ihtiyacını ortadan kaldırır. Bu sayede hem yeni projelerde tasarım esnekliği kazanılır hem de mevcut binalarda yapılacak iyileştirme çalışmalarında minimum inşaat müdahalesiyle maksimum verim elde edilir. Gelişmiş kumanda sistemleri, hassas seviyeleme özelliği ve frekans kontrollü sürücüler ile yükleriniz her katta güvenle ve yumuşak bir şekilde taşınır. Yüksek yoğunluklu kullanım senaryoları için tasarlanan bu sistemler, lojistik merkezleri, otopark blokları, AVM servis alanları ve üretim tesisleri için ideal çözümdür. Makine dairesiz yük asansörü seçimi, hem mimari hem de işletme tarafında uzun vadede önemli avantajlar sağlar.",
    },
    {
      id: "homelift",
      name: "Homelift",
      desc: "Müstakil evler, villalar ve dubleks daireler için özel tasarlanmış, minimum kuyu dibi gerektiren konforlu ev asansörleri.",
      image: "/images/services/homelift.jpg",
      longDesc:
        "Homelift çözümlerimiz, müstakil evler, villalar, dubleks ve triplex konutlar için hem konfor hem de prestij sağlayan özel asansör sistemleridir. Geleneksel asansörlere kıyasla daha az kuyu dibi ve tepe boşluğu ihtiyacı duyan homelift sistemleri, mevcut yapınıza minimum müdahale ile entegre edilebilir. Şık kabin tasarımları, cam şaft seçenekleri ve farklı renk-malzeme kombinasyonları sayesinde iç mimari ile uyumlu, estetik bir görünüm sunar. Özellikle yaşlı bireyler veya hareket kısıtlılığı olan kullanıcılar için ev içi hareket özgürlüğünü artırır, katlar arasında güvenli ve zahmetsiz ulaşım sağlar. Düşük enerji tüketimi, sessiz çalışma karakteri ve kolay bakım avantajları ile homelift sistemleri, yaşam alanlarınızı bir üst seviyeye taşırken aynı zamanda mülk değerini de artırır. Withmor olarak, her projede kullanıcı ihtiyaçlarını dinliyor, evinizin mimarisine en uygun çözümü anahtar teslim olarak hayata geçiriyoruz.",
    },
    {
      id: "insan-asansoru",
      name: "İnsan Asansörü",
      desc: "Konutlar, iş merkezleri ve oteller için EN-81 standartlarına uygun, konforlu ve güvenli yolcu taşıma sistemleri.",
      image: "/images/services/insan-asansoru.jpg",
      longDesc:
        "İnsan asansörleri, konut blokları, iş merkezleri, oteller ve karma kullanımlı yapılarda kullanıcıların günlük hayatındaki en kritik dikey ulaşım elemanıdır. Withmor yolcu asansörleri, EN-81 standartlarına uygun güvenlik donanımları, konfor odaklı kabin tasarımları ve enerji verimli tahrik sistemleriyle öne çıkar. Kabin içi aydınlatmadan buton dizaynına, kapı geçiş hızından sürüş konforuna kadar her detay, kullanıcı memnuniyeti ve güvenliği göz önünde bulundurularak tasarlanır. Farklı hız ve taşıma kapasitesi seçenekleriyle binanın trafik yoğunluğuna uygun çözümler sunulur, grup kontrol sistemleriyle yoğun saatlerde bekleme süreleri minimuma indirilir. Sessiz ve titreşimsiz çalışma sağlayan teknolojilerimiz, özellikle konut ve otel uygulamalarında konforu üst seviyeye taşır. Düzenli bakım ve uzaktan izleme opsiyonlarıyla insan asansörleriniz, yapı ömrü boyunca güvenle hizmet vermeye devam eder.",
    },
    {
      id: "konveyor",
      name: "Konveyör Asansörler",
      desc: "Lojistik merkezleri ve fabrikalarda sürekli malzeme akışını sağlamak için tasarlanan dikey konveyör sistemleri.",
      image: "/images/services/konveyor.jpg",
      longDesc:
        "Konveyör asansörler, özellikle lojistik merkezleri, e-ticaret depoları ve üretim tesislerinde kutu, koli, kaset veya palet gibi malzemelerin katlar arasında kesintisiz ve otomatik olarak taşınması için tasarlanır. Withmor konveyör asansör çözümleri, hat içi otomasyon sistemleri ile entegre çalışarak malzeme akışını hızlandırır, insan gücüne bağımlılığı azaltır ve operasyonel verimliliği önemli ölçüde artırır. Sürekli döngüsel çalışmaya uygun mekanik tasarım, yüksek performanslı motor ve sürücü grupları, sensör destekli güvenlik sistemleri ile hem işletme güvenliği hem de proses sürekliliği güvence altına alınır. Farklı ürün boyutlarına ve depo düzenine göre projeye özel taşıyıcı platform ve konveyör kombinasyonları geliştirilebilir. Bu sayede, hat tasarımınız bozulmadan dikey taşımayı sistemin doğal bir parçası haline getirir, depo içi lojistikte rekabet avantajı sağlayan esnek ve ölçeklenebilir çözümler sunarız.",
    },
    {
      id: "panoramik",
      name: "Panoramik Asansörler",
      desc: "AVM ve plazalar için mimari estetiği tamamlayan, cam kabinli ve geniş görüş açılı prestij asansörleri.",
      image: "/images/services/panoramik.jpg",
      longDesc:
        "Panoramik asansörler, binaların mimari karakterini öne çıkaran, kullanıcıya sadece bir ulaşım aracı değil aynı zamanda deneyim sunan prestij çözümleridir. Cam kabinler, geniş görüş açıları ve özel aydınlatma senaryoları ile AVM’ler, oteller, iş merkezleri ve rezidans projeleri için önemli bir tasarım unsuru haline gelir. Withmor panoramik asansörleri, taşıyıcı konstrüksiyondan cam seçimlerine kadar tüm bileşenleriyle hem estetik hem de güvenlik kriterleri dikkate alınarak tasarlanır. Dairesel, yarım daire veya köşeli kabin formlarıyla mimarın tasarım diline uyum sağlanır; paslanmaz çelik, cam ve özel kaplama seçenekleriyle benzersiz görünümler elde edilir. Yüksek konforlu sürüş karakteri, sessiz motor teknolojisi ve hassas seviyeleme sistemi ile kullanıcılar katlar arası geçişi konforlu bir seyahat deneyimi olarak algılar. Gece ve gündüz farklı ambiyanslar oluşturmak için LED tabanlı kabin içi ve şaft aydınlatmaları da opsiyonel olarak projeye dahil edilebilir.",
    },
    {
      id: "yatay-yamac",
      name: "Yatay Yamaç Asansörler",
      desc: "Eğimli arazilerde, sahil tesislerinde veya peyzaj projelerinde ulaşımı kolaylaştıran özel raylı sistemler.",
      image: "/images/services/yatay-yamac.jpg",
      longDesc:
        "Yatay ve yamaç asansörleri, eğimli arazilerde konforlu ve güvenli ulaşım ihtiyacını karşılamak üzere geliştirilen özel raylı sistem çözümleridir. Sahil tesisleri, teraslı yerleşimler, peyzajı güçlü oteller ve topoğrafyası zor alanlarda, kullanıcıların merdivenle kat etmek zorunda kaldığı uzun ve yorucu güzergâhlar bu sistemlerle konforlu bir yolculuğa dönüşür. Withmor yatay-yamaç asansörleri, dış mekân koşullarına dayanıklı malzemeler, korozyon önleyici yüzey kaplamaları ve iklim koşullarına özel tasarım prensipleriyle üretilir. Kabin tasarımları, açık veya kapalı formda, proje konseptine uygun olarak şekillendirilebilir. Güçlü çekiş sistemi, gelişmiş frenleme mekanizmaları ve emniyet sensörleri ile hat boyunca güvenli hareket sağlanır. Hem kullanıcı deneyimini iyileştiren hem de proje alanlarının erişilebilirliğini artıran bu sistemler, özellikle turizm ve üst segmente hitap eden konut projelerinde önemli bir katma değer oluşturur.",
    },
    {
      id: "ozel-projeler",
      name: "Özel Projeler",
      desc: "Standart dışı kuyu ölçüleri veya özel taşıma ihtiyaçlarınız için terzi işi mühendislik ve tasarım çözümleri.",
      image: "/images/services/ozel-projeler.jpg",
      longDesc:
        "Özel projeler, standart katalog çözümlerinin yeterli olmadığı durumlarda, binanın mimari ve yapısal koşullarına tam uyum sağlayan, tamamen projeye özgü olarak geliştirilen asansör ve platform sistemlerini kapsar. Withmor mühendislik ekibi, sıra dışı kuyu ölçüleri, özel kabin ebatları, farklı taşıma senaryoları veya estetik beklentiler için kapsamlı bir fizibilite ve tasarım süreci yürütür. Bu süreçte, mimar, statik proje ekibi ve işveren temsilcileriyle birlikte çalışılarak hem teknik hem görsel gereksinimler aynı potada eritilir. Örneğin tarihi yapılar, sınırlı kuyu alanına sahip binalar veya çok amaçlı kullanım senaryoları için kompakt, hafif ve modüler çözümler geliştirilir. Proje bazlı üretilen bu sistemlerde güvenlik standartlarından taviz verilmez; tüm hesaplamalar ve komponent seçimleri ulusal ve uluslararası normlara uygun şekilde yapılır. Özel projeler için sunduğumuz terzi işi çözümler, binanıza özgü benzersiz ve yüksek katma değerli bir dikey ulaşım deneyimi oluşturur.",
    },
  ]);

  const [activeService, setActiveService] = useState(0);
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  const [projects, setProjects] = useState([
    {
      name: "Skyline Residence Tower",
      type: "Panoramik Yolcu Asansörleri",
      desc: "4 cam panoramik kabin, hedef seçimli kontrol sistemi ve akıllı trafik yönetimi entegrasyonu.",
    },
    {
      name: "Techno Industrial Plant",
      type: "Ağır Hizmet Yük Asansörleri",
      desc: "Gün boyu yoğun kullanıma uygun, 3.500 kg kapasiteli 3 adet hidrolik yük asansörü projesi.",
    },
    {
      name: "City Hospital Complex",
      type: "Sedye ve Servis Asansörleri",
      desc: "Hastane standartlarında hijyen, kesintisiz güç kaynağı ve sarsıntısız kalkış-duruş teknolojisi.",
    },
    {
      name: "Vadi Park Plaza",
      type: "Yüksek Hızlı Asansörler",
      desc: "35 katlı iş merkezi için 4 m/s hızında, grup kumandalı 6 adet yolcu asansörü montajı.",
    },
    {
      name: "Metro Transfer Merkezi",
      type: "Yürüyen Merdiven",
      desc: "Günde 50.000 yolcu kapasiteli, ağır hizmet tipi 12 adet yürüyen merdiven sistemi.",
    },
    {
      name: "Lojistik Üssü",
      type: "Makaslı Platformlar",
      desc: "Tır yükleme ve boşaltma operasyonları için özel üretim 10 ton kapasiteli hidrolik platformlar.",
    },
  ]);

  // REFERANSLAR
  const [references, setReferences] = useState([
    {
      company: "Csm Metalurji",
      quote:
        "Ağır sanayi koşullarında çalışan tesislerimizde, yük asansörleri ve platform çözümlerinde yüksek dayanım ve süreklilik sağlandı.",
      name: "Tesis Yönetimi",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Como Cotton",
      quote:
        "Tekstil üretim hattımızda yoğun sevkiyatı güvenle taşıyan sistemler kuruldu, lojistik akışımız gözle görülür şekilde hızlandı.",
      name: "Üretim Koordinatörü",
      title: "Kurumsal Müşteri",
    },
    {
      company: "3K Tekstil",
      quote:
        "Katlar arası hammadde ve mamul taşımasında yük asansörleri ile hatlarımız daha düzenli ve güvenli hale geldi.",
      name: "Fabrika Sorumlusu",
      title: "Referans Proje",
    },
    {
      company: "Özşan Lojistik",
      quote:
        "Depo ve yükleme alanlarımızda kurulan çözümler sayesinde operasyon sürelerimiz kısaldı, kapasitemiz arttı.",
      name: "Operasyon Müdürü",
      title: "Referans Proje",
    },
    {
      company: "Azgur Gıda",
      quote:
        "Gıda güvenliği ve hijyen kriterlerine uygun, güvenilir yük taşıma sistemleriyle depolama süreçlerimiz güçlendi.",
      name: "Lojistik ve Depo Yönetimi",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Akkardeşler Hafriyat",
      quote:
        "Zorlu şantiye koşullarında kullanılan sistemler sağlamlığıyla öne çıkıyor, bakım ihtiyacı minimum seviyede.",
      name: "Şantiye Koordinatörü",
      title: "Referans Proje",
    },
    {
      company: "Color Metal",
      quote:
        "Metal işleme tesisimizde, ağır ve hacimli yüklerde dahi titreşimsiz ve güvenli taşıma imkânı sağlandı.",
      name: "Üretim Müdürü",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Murem Tekstil",
      quote:
        "Tekstil tesisimizdeki dikey lojistik çözümleri sayesinde hem iş güvenliği arttı hem de günlük sevkiyat kapasitemiz yükseldi.",
      name: "Genel Müdürlük",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Perge Tekstil Lüleburgaz",
      quote:
        "Lüleburgaz tesisimizde kurulan sistemler, yüksek hacimli üretim tempomuzla tam uyumlu çalışıyor.",
      name: "Tesis Yönetimi",
      title: "Referans Proje",
    },
    {
      company: "THY Tekstil Lüleburgaz",
      quote:
        "Lüleburgaz’daki üretim tesislerimizde, yük asansörleri ve platform çözümleri ile süreçlerimiz çok daha kontrollü ve verimli hale geldi.",
      name: "Operasyon Yönetimi",
      title: "Kurumsal Müşteri",
    },
  ]);

  const [googleReviews, setGoogleReviews] = useState([
    {
      id: 1,
      name: "Ahmet Yılmaz",
      rating: 5,
      text: "Asansör montaj sürecinde gösterdikleri titizlik ve profesyonellik için teşekkür ederim. Zamanında teslimat ve kaliteli işçilik.",
      date: "2 hafta önce",
    },
    {
      id: 2,
      name: "Mehmet Demir",
      rating: 5,
      text: "Bakım hizmetlerinden çok memnunuz. Teknik ekip çok bilgili ve Türkiye’nin her yerinden 24 saat 444 37 59 numaralı telefondan ulaşılabilir durumda.",
      date: "1 ay önce",
    },
    {
      id: 3,
      name: "Ayşe Kaya",
      rating: 5,
      text: "Villa asansörü projemizde harika bir iş çıkardılar. Hem estetik hem de çok sessiz çalışıyor.",
      date: "3 ay önce",
    },
    {
      id: 4,
      name: "Canan Erkin",
      rating: 4,
      text: "Proje yönetimi gayet başarılıydı, ufak tefek aksaklıklar olsa da teknik ekip hızlı çözümler üretti.",
      date: "4 ay önce",
    },
    {
      id: 5,
      name: "Burak Yılmaz",
      rating: 5,
      text: "Fiyat performans açısından piyasadaki en iyi firma. Malzeme kalitesi beklediğimizden iyi.",
      date: "5 ay önce",
    },
    {
      id: 6,
      name: "Zeynep Çelik",
      rating: 5,
      text: "Periyodik bakım konusunda çok hassaslar. Asansörümüz hiç yarı yolda bırakmadı.",
      date: "6 ay önce",
    },
  ]);

  // --- YENİ EKLENEN STATE VE HANDLER ---
  const [mainContactForm, setMainContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Malzeme teklifi iste",
    message: "",
  });

  const handleMainContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, subject, message } = mainContactForm;
    const text = `*Web Sitesi İletişim Formu*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*E-Posta:* ${email}\n*Konu:* ${subject}\n*Mesaj:* ${message}`;
    const url = `https://wa.me/905558883359?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  // ----------------------------------------

  // Admin login kalıcılığı
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("withmor_admin");
      if (stored === "true") {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const scrollToAbout = (tabKey) => {
    setActiveAboutTab(tabKey);
    setIsExpanded(false);
    const section = document.getElementById("about");
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToService = (serviceId) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(serviceId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById("services");
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setShowLogin(false);
      setLoginError("");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("withmor_admin", "true");
      }
    } else {
      setLoginError("Kullanıcı adı veya şifre hatalı!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("withmor_admin");
    }
  };

  const [editModal, setEditModal] = useState({
    open: false,
    type: null,
    index: null,
  });
  const [tempValue, setTempValue] = useState({});

  const openEdit = (type, index = null) => {
    setEditModal({ open: true, type, index });

    if (type === "hero") setTempValue(hero);
    if (type === "company") setCompanyInfo(companyInfo);
    if (type === "service" && index !== null) setTempValue(services[index]);
    if (type === "project" && index !== null) setTempValue(projects[index]);
    if (type === "reference" && index !== null) setTempValue(references[index]);
    if (type === "aboutTab") {
      setTempValue({ ...aboutTabs[index] });
    }
    if (type === "gallery" && index !== null) {
      setTempValue({ image: galleryImages[index] });
    }
  };

  const openAdd = (type) => {
    if (!isLoggedIn && type !== "reference") {
      setShowLogin(true);
      return;
    }
    setEditModal({ open: true, type, index: null });

    if (type === "service")
      setTempValue({
        id: `new-${Date.now()}`,
        name: "",
        desc: "",
        image: "",
        longDesc: "",
      });
    if (type === "project")
      setTempValue({ name: "", type: "", desc: "" });
    if (type === "reference")
      setTempValue({ company: "", quote: "", name: "", title: "" });
    if (type === "gallery") setTempValue({ image: "" });
  };

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "hero") setHero(tempValue);
    if (type === "company") setCompanyInfo(tempValue);

    if (type === "aboutTab" && index) {
      setAboutTabs((prev) => ({
        ...prev,
        [index]: tempValue,
      }));
    }

    if (type === "gallery") {
      if (index !== null) {
        const copy = [...galleryImages];
        copy[index] = tempValue.image;
        setGalleryImages(copy);
      } else {
        setGalleryImages([...galleryImages, tempValue.image]);
      }
    }

    if (type === "service") {
      if (index !== null) {
        const copy = [...services];
        copy[index] = tempValue;
        setServices(copy);
      } else {
        setServices([...services, tempValue]);
        setActiveService(services.length);
      }
    }

    if (type === "project") {
      if (index !== null) {
        const copy = [...projects];
        copy[index] = tempValue;
        setProjects(copy);
      } else {
        setProjects([...projects, tempValue]);
      }
    }

    if (type === "reference") {
      if (index !== null) {
        const copy = [...references];
        copy[index] = tempValue;
        setReferences(copy);
      } else {
        setReferences([...references, tempValue]);
      }
    }

    setEditModal({ open: false, type: null, index: null });
  };

  const handleDelete = () => {
    const { type, index } = editModal;

    if (type === "service" && index !== null) {
      const newServices = services.filter((_, i) => i !== index);
      setServices(newServices);
      if (activeService >= index && activeService > 0) {
        setActiveService(activeService - 1);
      } else if (newServices.length === 0) {
        setActiveService(0);
      }
    }

    if (type === "gallery" && index !== null) {
      const newGallery = galleryImages.filter((_, i) => i !== index);
      setGalleryImages(newGallery);
    }

    if (type === "project" && index !== null) {
      const newProjects = projects.filter((_, i) => i !== index);
      setProjects(newProjects);
    }

    if (type === "reference" && index !== null) {
      const newReferences = references.filter((_, i) => i !== index);
      setReferences(newReferences);
    }

    setEditModal({ open: false, type: null, index: null });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const { name, phone, projectType, floorCount, location, note } = quoteForm;
    const message = `*Proje Teklifi Talebi*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Talep Konusu:* ${projectType}\n*Durak Sayısı:* ${floorCount}\n*Konum/Şehir:* ${location}\n*Ek Notlar:* ${note}`;
    const whatsappUrl = `https://wa.me/905558883359?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowQuoteModal(false);
  };

  const handleFastContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = fastContactForm;
    const whatsappMessage = `*Hızlı İletişim Formu*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Mesaj:* ${message}`;
    const whatsappUrl = `https://wa.me/905558883359?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800";
    e.target.onerror = null;
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-28 items-center justify-center">
              <img
                src="/images/withmor-logo.png"
                alt="Withmor Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-tight text-slate-900">
                {companyInfo.name}
              </p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                Elevator Solutions
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex h-full">
            {/* Kurumsal Dropdown Menü */}
            <div className="relative group h-full flex items-center">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout("biz-kimiz");
                }}
                className="hover:text-blue-700 transition-colors flex items-center gap-1 py-4"
              >
                Kurumsal{" "}
                <Icons.ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-200"
                />
              </a>
              <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                  {Object.keys(aboutTabs).map((key) => (
                    <button
                      key={key}
                      onClick={() => scrollToAbout(key)}
                      className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-700"
                    >
                      {aboutTabs[key].title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ürünlerimiz Dropdown */}
            <div className="relative group h-full flex items-center">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToService("services");
                }}
                className="hover:text-blue-700 transition-colors flex items-center gap-1 py-4"
              >
                Ürünlerimiz{" "}
                <Icons.ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-200"
                />
              </a>
              <div className="absolute left-0 top-full pt-2 w-56 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(service.id)}
                      className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-700"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="#projects" className="hover:text-blue-700 transition-colors">
              Projeler
            </a>
            <a
              href="#references"
              className="hover:text-blue-700 transition-colors"
            >
              Referanslar
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">
              İletişim
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <span className="hidden text-[11px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200 sm:inline-flex items-center gap-1">
                <Icons.CheckCircle2 size={12} /> Yönetici
              </span>
            )}
            <button
              onClick={() => {
                if (isLoggedIn) handleLogout();
                else {
                  setLoginError("");
                  setShowLogin(true);
                }
              }}
              className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:border-slate-300"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                {isLoggedIn ? (
                  <Icons.LogOut size={12} />
                ) : (
                  <Icons.User size={12} />
                )}
              </span>
              {isLoggedIn ? "Çıkış" : "Giriş"}
            </button>

            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Icons.Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-white h-[100dvh] flex flex-col animate-in slide-in-from-right duration-200 md:hidden">
            <div className="p-4 flex justify-between items-center border-b border-slate-100">
              <span className="font-bold text-slate-900">Menü</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-slate-100 rounded-full text-slate-600"
              >
                <Icons.X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-4 text-lg font-medium text-slate-700 overflow-y-auto">
              <div>
                <span className="text-blue-900 font-bold block mb-2">
                  Kurumsal
                </span>
                <div className="pl-4 flex flex-col gap-3 text-base border-l-2 border-slate-100">
                  {Object.keys(aboutTabs).map((key) => (
                    <button
                      key={key}
                      onClick={() => scrollToAbout(key)}
                      className="text-left text-slate-600 hover:text-blue-700"
                    >
                      {aboutTabs[key].title}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-blue-900 font-bold block mb-2">
                  Ürünlerimiz
                </span>
                <div className="pl-4 flex flex-col gap-3 text-base border-l-2 border-slate-100">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(service.id)}
                      className="text-left text-slate-600 hover:text-blue-700"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-700"
              >
                Projeler
              </a>
              <a
                href="#references"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-700"
              >
                Referanslar
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-700"
              >
                İletişim
              </a>

              <div className="h-px bg-slate-100 my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (isLoggedIn) handleLogout();
                  else {
                    setLoginError("");
                    setShowLogin(true);
                  }
                }}
                className="text-left text-blue-700 font-bold"
              >
                {isLoggedIn ? "Çıkış Yap" : "Yönetici Girişi"}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      {/* ... BURADAN İTİBAREN SENİN ORİJİNAL KODUN AYNEN DEVAM EDİYOR ... */}
      {/* (Hero, About, Why Us, Services, Projects, References, Contact, Gallery, Footer, Modals) */}
      {/* Bu kısmı kısaltmak için burada kesiyorum, elindeki orijinal kodun
          "return (" satırından sonuna kadar olan kısmını buraya aynen kopyalayabilirsin.
          Tek fark: ElevatorAnimation artık import edildiği için,
          <ElevatorAnimation /> satırı zaten çalışmaya devam edecek. */}
    </div>
  );
}
