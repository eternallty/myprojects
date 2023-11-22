<main class="container">
    <section class="promo">
        <h2 class="promo__title">Нужен стафф для катки?</h2>
        <p class="promo__text">На нашем интернет-аукционе ты найдёшь самое эксклюзивное сноубордическое и горнолыжное снаряжение.</p>
        <ul class="promo__list">
            <?php foreach ($categories as $item): ?>
                <li class="promo__item promo__item--<?=$item['code']?>">
                    <a class="promo__link" href="pages/all-lots.html"><?=$item['name']?></a>
                </li>
            <?php endforeach;?>
        </ul>
    </section>
    <section class="lots">
        <div class="lots__header">
            <h2>Открытые лоты</h2>
        </div>
        <ul class="lots__list">
            <?php foreach ($lots as $item): ?>
                <li class="lots__item lot">
                    <div class="lot__image">
                        <img src="<?=htmlspecialchars($item['image'])?>" width="350" height="260" alt="">
                    </div>
                    <div class="lot__info">
                        <span class="lot__category"><?=htmlspecialchars($item['category_name'])?></span>
                        <h3 class="lot__title"><a class="text-link" href='/lot.php?id=<?=$item['id']?>'><?=htmlspecialchars($item['name'])?></a></h3>
                        <div class="lot__state">
                            <div class="lot__rate">
                                <span class="lot__amount">Стартовая цена</span>
                                <span class="lot__cost"><?=htmlspecialchars(format_price($item['price']))?></span>
                            </div>
                            <?php $exptime = get_dt_range($item['end_date']) ?>
                            <div class="lot__timer timer <?php if($exptime[0] < '24'): ?> timer--finishing <?php endif?>">
                                <?="$exptime[0]:$exptime[1]"?>
                            </div>
                        </div>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </section>
</main>