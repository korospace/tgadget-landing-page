let arrMaster={arrKategori:[],arrKeyword:[],arrProduk:[]};function createArray(e,t){if(0==arrMaster[t].length)arrMaster[t].push(e);else{let a=!1;arrMaster[t].forEach((r=>{"arrProduk"==t?e.id==r.id&&(a=!0):e==r&&(a=!0)})),a||arrMaster[t].push(e)}}function getData(e){$.ajax({url:API_URL+e,method:"post",data:{code:"031020"},success:t=>{let a=JSON.parse(t);"spanduk"==e&&createBanner(a),"getKategori"==e&&getCategory(a),"getKeyword"==e&&getKeyword(a),"getPopup"==e&&getPopup(a)}})}function createBanner(e){e.forEach((e=>$(".glide__track .glide__slides").append(`<div class="glide__slide">\n            <img src="${e.imgurl}" class="w-full h-28 mysm2:h-32 mysm:h-44 sm:h-auto">\n        </div>`))),new Glide(".glide",{type:"carousel",focusAt:"center",autoplay:5e3,animationTimingFunc:"ease-in-out",animationDuration:1e3,gap:0,perView:1}).mount()}function categoryRise(){$("#btn-kategori").toggleClass("bg-btn-kategori"),$("#kategori-wraper").toggleClass("border-t pb-0.5 h-12 sm:h-17 md:h-20 h-0");let[e,t,a]=["hidden","opacity-0","opened"];$("#kategori-wraper div").hasClass("opaned")&&([e,t,a]=[t,e,a]),$("#kategori-wraper div").toggleClass(e,a),setTimeout((()=>$("#kategori-wraper div").toggleClass(t,a)),300)}function getCategory(e){e.forEach((e=>createArray(e.kategori,"arrKategori"))),insertCategory(arrMaster.arrKategori)}function insertCategory(e){e.forEach((e=>$("nav #kategori-wraper div").append(`<span class="min-w-max h-full px-4 sm:px-6 md:px-8 flex jusify-center items-center opacity-80 hover:opacity-100 cursor-pointer" href="${e}" onclick="catOnClick(this,event);"><h1 class="opacity-80 hover:opacity-100">${e}</h1></span>`)))}document.querySelector(".glide").style.height=document.querySelector(".bannerTumbal").clientHeight+"px",getData("spanduk"),$("div.glide").mouseenter((()=>$(".glide__arrow").toggleClass("active"))),$("div.glide").mouseleave((()=>$(".glide__arrow").toggleClass("active"))),window.innerWidth<=411&&categoryRise(),$("#btn-kategori").click((()=>categoryRise())),getData("getKategori");let kategori="";function catOnClick(e,t,a=!1,r=!1){if(listCLicked=r,$("#kategori-wraper span").removeClass("border-b-2 md:border-b-4 border-myyellow"),a)return 0;t.preventDefault(),clearSearchInput();["border-b-2","md:border-b-4","border-myyellow"].forEach((t=>e.classList.add(t))),$("#btn-load-more").parent().hasClass("hidden")&&$("#btn-load-more").parent().removeClass("hidden"),kategori="semua kategori"!==e.getAttribute("href")?e.getAttribute("href"):"",""!==keyword&&(keyword=""),getPartlyProduk()}function getKeyword(e){e.forEach((e=>{e.keyword.split("|").forEach((e=>{createArray(e,"arrKeyword")}))}))}getData("getKeyword");let keyword="",listCLicked=!1;function listOnClick(e){catOnClick("","",!0,!0),$("input#keyword").val(e.dataset.value),$("#btn-load-more").parent().hasClass("hidden")&&$("#btn-load-more").parent().removeClass("hidden"),keyword=e.dataset.value,""!==kategori&&(kategori=""),getPartlyProduk()}function clearSearchInput(){$("input#keyword").val(""),$("label[for=keyword] img").attr("src",BASE_URL+"asset/img/search.svg").css("opacity","1")}function getPartlyProduk(){$("#produk-container").hasClass("mt-8 mb-24 sm:mb-32")||$("#produk-container").addClass("mt-8 mb-24 sm:mb-32"),$("#notfound").hasClass("hidden")||$("#notfound").addClass("hidden"),$("#div-load-more").hasClass("hidden")||$("#div-load-more").addClass("hidden"),createLoadingCard(),doAjaxProduct()}function loadMore(e,t){t.preventDefault(),e.firstElementChild.classList.toggle("hidden"),e.lastElementChild.classList.toggle("hidden"),doAjaxProduct($("#produk-wraper a").length,e)}function createLoadingCard(){let e="",t=0;t=window.innerWidth>=1024?5:window.innerWidth<=1024&&window.innerWidth>=641?4:2;for(let a=0;a<t;a++)e+=elementCard();$("#produk-wraper").html(e)}function doAjaxProduct(e=null,t=null){$.ajax({url:API_URL+"getPartlyProduk/",data:{code:"031020",offset:e,kategori:kategori,keyword:keyword},method:"post",success:e=>{let a=JSON.parse(e);if(null!==t){if(t.firstElementChild.classList.toggle("hidden"),t.lastElementChild.classList.toggle("hidden"),a.length<=0)return t.firstElementChild.innerHTML="No More Product",t.firstElementChild.classList.remove("border-b-2"),setTimeout((()=>{t.firstElementChild.innerHTML="load more",t.firstElementChild.classList.add("border-b-2"),t.parentElement.classList.add("hidden")}),2e3),0}else a.length<10&&($("#div-load-more").hasClass("hidden")||$("#div-load-more").addClass("hidden")),a.length>=10&&$("#div-load-more").removeClass("hidden");createProdukCard(a,a.length)}})}function createProdukCard(e,t){e.forEach((e=>{createArray(e,"arrProduk");let t=createHarga(e.harga);$("#produk-wraper").append(elementCard(e.id,t,e.imgurl,e.nama))})),$(".loadingCard").remove(),t<=0&&($("#notfound").removeClass("hidden"),$("#produk-container").removeClass("mt-8 mb-24 sm:mb-32"))}function elementCard(e=null,t=null,a=null,r=null){let i="",l="";return i=null!=t?t:"000.000",l=null!=r?r:"Lorem ipsum dolor, sit amet consectetur adipisicing elit",`<a href="" class="${null==e?"loadingCard":""} bg-white relative w-full h-full flex flex-col rounded-tl-lg rounded-br-lg overflow-hidden" style="box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);" data-id="${e}" ${null!==e?'onclick="cardClick(this,event);"':""}><span class="span-harga bg-black px-2 py-1 absolute z-30 top-0 right-0 text-myyellow text-myxs mysm:text-sm sm:text-xs" style="min-width: max-content;">Rp ${i}</span><div class="relative p-3 mymd:p-4 img-wraper w-full flex-1 flex justify-center items-center"><img class="w-full" src="${BASE_URL}asset/img/bgproduk.webp" alt=""><img src="${BASE_URL}asset/img/loading.svg" class="absolute w-8 sm:w-12 opacity-80"><div class="bg-white w-full absolute ${null!==a?"z-20":"z-min1"}"><img class="w-full" src="${a}" alt="${l}"></div></div><div class="name-wraper bg-myyellow px-3 pt-3 pb-2 text-myxs mysm2:text-xs mysm:text-base sm:text-sm md:text-base mymd:text-sm text-left text-black"><span class="w-full" style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;text-overflow: ellipsis;">${l}</span></div></a>`}function createHarga(e){let t=1,a="",r="";for(let r=[...e].length-1;r>=0;r--)4==t?(a+="."+[...e][r],t=1):a+=[...e][r],t++;for(let e=a.length-1;e>=0;e--)r+=a[e];return r}function closePopup(e,t){t.target.classList.contains("close")&&$("#popup-container").css("z-index","-1").addClass("hidden z-min1")}function getPopup(e){let t=e.tgl.split("/");setInterval((()=>(()=>{const e=new Date(`${t[2]}-${t[1]}-${t[0]}T00:00`).getTime()-(new Date).getTime();$("span#day").html(Math.floor(e/864e5)),$("span#hour").html(Math.floor(e%864e5/36e5)),$("span#minute").html(Math.floor(e%36e5/6e4)),$("span#second").html(Math.floor(e%6e4/1e3))})()),1e3),setTimeout((()=>{$("#popup-container").css("z-index","10002").removeClass("hidden z-min1"),$("#img-popup").attr("src",e.imgurl)}),2e3)}$(window).click((function(){$("#items-keyword").html(""),$("#kategori-wraper").removeClass("overflow-hidden").addClass("overflow-auto")})),$("label[for=keyword]").click((function(){clearSearchInput(),$("#btn-load-more").parent().hasClass("hidden")&&$("#btn-load-more").parent().removeClass("hidden"),listCLicked&&(catOnClick("","",!0,!1),$("#kategori-wraper span:nth-child(1)").addClass("border-b-2 md:border-b-4 border-myyellow").removeClass("opacity-80 hover:opacity-100"),""!==keyword&&(keyword=""),""!==kategori&&(kategori=""),getPartlyProduk())})),$("input#keyword").keyup((function(){let e="";if(""==$(this).val())return $("#items-keyword").html(""),$("#kategori-wraper").removeClass("overflow-hidden").addClass("overflow-auto"),$("label[for=keyword] img").attr("src",BASE_URL+"asset/img/search.svg").css("opacity","1"),0;arrMaster.arrKeyword.forEach((t=>{t.includes($(this).val())&&(e+=`<li class="block w-full text-left px-3 py-3 sm:py-6 cursor-pointer hover:bg-btn-kategori"  style="border-bottom:1px solid rgba(49,53,59,0.4);" data-value="${t}" onclick="listOnClick(this);">${t}</li>`)})),$("label[for=keyword] img").attr("src",BASE_URL+"asset/img/cancel.svg").css("opacity","0.8"),$("#kategori-wraper").removeClass("overflow-auto").addClass("overflow-hidden"),$("#items-keyword").html(e),$("#items-keyword").append(`<li class="block w-full text-left px-3 py-3 sm:py-6 cursor-pointer hover:bg-btn-kategori"  style="border-bottom:1px solid rgba(49,53,59,0.4);" data-value="${$(this).val()}" onclick="listOnClick(this);">cari "${$(this).val()}"</li>`)})),getPartlyProduk(null,null),getData("getPopup");let linktp="",linksp="",linklz="",linkwa="https://mywa.link/3xwr4ga2";function cardClick(e,t){t.preventDefault(),updateStat(null,null,null,"dilihat",e.dataset.id),$("#detail-container").toggleClass("hidden z-min1 z-10002"),$("section").toggleClass("overflow-hidden overflow-auto"),setTimeout((()=>{$("#detail-wraper").toggleClass("h-0 h-full"),setTimeout((()=>{resizeDescBag1(),$("#close-detail").removeClass("opacity-0").addClass("opacity-70"),$("#img-wraper").removeClass("opacity-0"),$("#deskription-wraper1").removeClass("opacity-0")}),300)}),20),arrMaster.arrProduk.forEach((t=>{if(t.id===e.dataset.id){$("#img-product").attr("src",t.imgurl);let e="";e="1"===t.stok?"Ready stok":"Stok habis",$("#status").html(e),$("#nama").html(t.nama),$("#harga").html("Rp. "+createHarga(t.harga)),$("#text-deskripsi").html(t.deskripsi);let a="";t.isipaket.split("|").forEach((e=>a+=`<li>${e}</li>`)),$("#isipaket ul").html(a);let r="";t.fitur.split("|").forEach((e=>r+=`<li>${e}</li>`)),$("#fitur ul").html(r);let i="";t.spesifikasi.split("|").forEach((e=>i+=`<li>${e}</li>`)),$("#spesifikasi ul").html(i),linktp=""!==t.linktp?t.linktp:"saat ini tidak tersedia",""!==t.linktp?$("#btn-link-tokped").attr("onclick",`updateStat(el=null,event=null,'${t.linktp}','tokopedia','${t.id}');`):$("#btn-link-tokped").attr("onclick",'return alert("maaf, saat ini barang tidak tersedia di tokopedia");'),linksp=""!==t.linksp?t.linksp:"saat ini tidak tersedia",""!==t.linksp?$("#btn-link-shopee").attr("onclick",`updateStat(el=null,event=null,'${t.linksp}','shopee','${t.id}');`):$("#btn-link-shopee").attr("onclick",'return alert("maaf, saat ini barang tidak tersedia di shopee");'),linklz=""!==t.linklz?t.linklz:"saat ini tidak tersedia",""!==t.linklz?$("#btn-link-lazada").attr("onclick",`updateStat(el=null,event=null,'${t.linklz}','lazada','${t.id}');`):$("#btn-link-lazada").attr("onclick",'return alert("maaf, saat ini barang tidak tersedia di lazada");'),""!==linkwa?$("#btn-link-wa").attr("onclick",`updateStat(el=null,event=null,'${linkwa}','whatsapp','${t.id}');`):$("#btn-link-wa").attr("onclick",'return alert("maaf, saat ini barang tidak tersedia di whatsapp");')}})),window.innerWidth<=640&&(document.querySelector("#deskription-wraper3 #bag-2").style.height=document.querySelector("#deskription-wraper3 #bag-2 #wraper").clientHeight+50+"px")}function closeDetail(){zoomClicked=!1,$("#close-detail").removeClass("opacity-70").addClass("opacity-0"),$("#img-wraper").addClass("opacity-0"),$("#deskription-wraper1").addClass("opacity-0"),setTimeout((()=>{$("#detail-wraper").toggleClass("h-0 h-full"),setTimeout((()=>{$("#detail-container").toggleClass("hidden z-min1 z-10002"),$("section").toggleClass("overflow-hidden overflow-auto")}),300)}),300),descriptionDown(),document.querySelector("#deskription-wraper1").style.height="50px"}function descriptionDown(){resizeDescBag1(),$("#bg-scroll").addClass("opacity-0"),$("#arrow").addClass("rotate-180"),document.querySelector("#deskription-wraper2").classList.remove("active")}function resizeDescBag1(){window.innerWidth<=640&&(document.querySelector("#deskription-wraper1").style.height=document.querySelector("#deskription-wraper3 #bag-1").clientHeight+document.querySelector("#deskription-wraper2 #swipe").clientHeight+"px")}$("#swipe").on("click",(function(){document.querySelector("#deskription-wraper2").classList.contains("active")?descriptionDown():($("#deskription-wraper1").css("height","75%"),$("#bg-scroll").removeClass("opacity-0"),$("#arrow").removeClass("rotate-180"),document.querySelector("#deskription-wraper2").classList.add("active"),zoomClicked&&(zoomClicked=!1))}));let zoomClicked=!1;function zoomProduct(e){if(window.innerWidth>641)return 0;zoomClicked?(document.querySelector("#deskription-wraper1").style.height=document.querySelector("#deskription-wraper3 #bag-1").clientHeight+document.querySelector("#deskription-wraper2 #swipe").clientHeight+"px",zoomClicked=!1):(document.querySelector("#deskription-wraper1").style.height=document.querySelector("#deskription-wraper2 #swipe").clientHeight+"px",$("#bg-scroll").addClass("opacity-0"),$("#arrow").addClass("rotate-180"),document.querySelector("#deskription-wraper2").classList.remove("active"),zoomClicked=!0)}function linkBuy(){$("#buy-container").removeClass("z-min1 opacity-0").addClass("z-30"),$("#buy-wraper1").removeClass("opacity-0 w-24").addClass("w-72"),$("#link-tokped").html(linktp),$("#link-shopee").html(linksp),$("#link-lazada").html(linklz),$("#link-wa").html(linkwa)}function closeBuy(e,t){if(!t.target.classList.contains("close"))return 0;$("#buy-container").removeClass("z-30").addClass("z-10 opacity-0"),$("#buy-wraper1").removeClass("w-72").addClass("opacity-0 w-24"),$("#link-tokped").html(""),$("#link-shopee").html(""),$("#link-lazada").html(""),$("#link-wa").html("")}