
<nav class="relative z-50 w-screen h-16 sm:h-20 px-8 md:px-16 flex justify-between items-center overflow-hidden">
    
    <a href="<?= BASE_URL; ?>">
        <img src="<?= BASE_URL; ?>asset/img/logo-text.webp" class="w-32 sm:w-48 h-6 sm:h-8 opacity-90">
    </a>

    <!-- burger -->
    <div class="burgerOpen w-6 h-4 sm:h-5 flex md:hidden flex-col justify-between cursor-pointer transform transition duration-300" onclick="openLinkWraper2();">
        <span class="bg-myyellow w-full h-1 sm:h-1"></span>
        <span class="bg-myyellow w-full h-1 sm:h-1"></span>
        <span class="bg-myyellow w-full h-1 sm:h-1"></span>
    </div>
    <div class="burgerClose absolute top-6 sm:top-7 right-6 w-10 sm:w-12 h-4 sm:h-6 flex md:hidden flex-col justify-center transform translate-x-40 transition duration-300 cursor-pointer overflow-hidden" onclick="closeLinkWraper2();">
        <span class="bg-myyellow w-full h-1/6 origin-center transform rotate-45"></span>
        <span class="bg-myyellow w-full h-1/6 origin-center transform -rotate-45"></span>
    </div>

    <!-- links wraper 1 -->
    <div id="link-wraper1" class="link-wraper text-white w-96 hidden md:flex justify-between opacity-90">
        <a class="text-sm tracking-widest uppercase opacity-90 border-b-2 border-myyellow pb-2 md:pb-1 text-myyellow hrefAktif hrefSection hrefhome" href="home" >home</a>
        <a class="text-sm tracking-widest uppercase opacity-90 hrefSection hrefabout" href="about">about</a>
        <a class="text-sm tracking-widest uppercase opacity-90 hrefSection hreftestimoni" href="testimoni">testimoni</a>
        <a class="text-sm tracking-widest uppercase opacity-90" href="<?= BASE_URL; ?>produk/">product</a>
    </div>

</nav>

<!-- links wraper 2 -->
<div id="link-wraper2" class="link-wraper bg-link-wraper2 fixed z-30 top-16 sm:top-20 bottom-0 right-0 w-screen sm:w-1/2 flex md:hidden flex-col justify-center transition duration-300 delay-100">
    
    <div class="w-full mt-6 px-16 sm:px-10 flex-1 flex flex-col justify-around items-center">
        <a class="w-full mb-6 text-2xl sm:text-3xl font-bold tracking-widest uppercase transform translate-x-28 transition duration-300 opacity-0 border-b-2 border-myyellow pb-2 md:pb-1 text-myyellow hrefSection hrefhome" href="home">home</a>
        <a class="w-full mb-6 text-2xl sm:text-3xl font-bold tracking-widest uppercase transform translate-x-28 transition duration-300 opacity-0 hrefSection hrefabout" href="about">about</a>
        <a class="w-full mb-6 text-2xl sm:text-3xl font-bold tracking-widest uppercase transform translate-x-28 transition duration-300 opacity-0 hrefSection hreftestimoni" href="testimoni">testimoni</a>
        <a class="w-full mb-6 text-2xl sm:text-3xl font-bold tracking-widest uppercase transform translate-x-28 transition duration-300 opacity-0" href="<?= BASE_URL; ?>produk/">product</a>
    </div>

    <!-- sosial media links -->
    <div class="w-full flex-1 flex items-center">
        <div class="w-full px-16 sm:px-10 flex justify-between items-center">
            <a class="w-8 mr-2 transform translate-x-28 transition duration-500 opacity-0 cursor-pointer" onclick="updateStatistic('tokopedia','https://www.tokopedia.com/t-gadgetid/product');">
                <img loading="lazy" width="100%" class="transition" src="<?= BASE_URL; ?>/asset/img/tokopedia.svg" alt="tgadget id">
            </a>
            <a class="w-8 mx-2 transform translate-x-28 transition duration-500 opacity-0 cursor-pointer" onclick="updateStatistic('shopee','not available');">
                <img loading="lazy" width="100%" class="transition" src="<?= BASE_URL; ?>/asset/img/shopee.svg" alt="tgadget id">
            </a>
            <a class="w-8 mx-2 transform translate-x-28 transition duration-500 opacity-0 cursor-pointer" onclick="updateStatistic('lazada','not available');">
                <img loading="lazy" width="100%" class="transition" src="<?= BASE_URL; ?>/asset/img/lazada.svg" alt="t gadget id">
            </a>
            <a class="w-8 ml-2 transform translate-x-28 transition duration-500 opacity-0 cursor-pointer" onclick="updateStatistic('whatsapp','https://mywa.link/3xwr4ga2');">
                <img loading="lazy" width="100%" class="transition" src="<?= BASE_URL; ?>/asset/img/whatsapp.svg" alt="t gadget id">
            </a>
        </div>
    </div>

</div>