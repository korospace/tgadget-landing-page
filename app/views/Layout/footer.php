 
    <script src="<?= BASE_URL; ?>asset/js/jquery-3.5.1.min.js"></script>
    <script src="<?= BASE_URL; ?>asset/js/gsap.min.js"></script>
    <script src="<?= BASE_URL; ?>asset/js/glide.min.js"></script>

    <script>
        // ... URL ...
        const API_URL  = $('span#api-url').data('url');
        const BASE_URL = $('span#base-url').data('url');
    </script>

    <?php if($data['title'] == 'home') : ?>
        <script src="<?= BASE_URL; ?>asset/js/home.js"></script>
    <?php else : ?>
        <script src="<?= BASE_URL; ?>asset/js/produk.js"></script>
    <?php endif; ?>

    <script>
        // ... update data visitor
        ($('#newVisitor').data('visitor') !== '') ? updateStat(null,null,null,'pengunjung',null) : '';
        // ... update statistik
        function updateStat(el=null,event=null,link=null,atribut,id=null){
            if(link==='lapak belum tersedia'){
                alert('maaf, lapak belum tersedia');
                return 0;
            }
            (event !== null) ? event.preventDefault() : '';
            $.ajax({
                url: API_URL+'statistik/',
                method:'post',
                data:{code:'031020',atribut:atribut,id:id},
            });
            (link !== null) ? window.open(link,'blank') : '';
        }
    </script>
</body>
</html>