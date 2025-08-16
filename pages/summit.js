import Layout from '../components/Layout';
import styles from '../styles/Event.module.css';

export default function Summit() {
  return (
    <Layout title="第2回 北條氏ゆかりの戦国武将サミット">
      <div className="container py-5">
        <h1 className={styles.eventTitle}>第2回 北條氏ゆかりの戦国武将サミット</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>趣旨</h2>
          <p>
            小田原市は、“戦国時代の始まりと終わりの街”として歴史的にも象徴的な場所です。北條氏の居城・小田原城と、豊臣秀吉が築いた石垣山一夜城が同じ町に並び立つ地は、日本全国でも唯一。その交差する歴史は、戦国の激動と英傑たちの精神を現代に伝えます。
            本サミットは、北條氏を中心とした戦国武将の思想と地域の歴史文化を広く発信するとともに、来場者が能動的に歴史と触れ合える体験型企画を展開します。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>開催概要</h2>
          <ul className={styles.list}>
            <li><strong>名称:</strong> 第2回北條氏ゆかりの戦国武将サミット</li>
            <li><strong>日時:</strong> 令和7年11月3日(月) 10:00～16:00 <small>※雨天等の場合は中止（当日7:30に決定）</small></li>
            <li><strong>会場:</strong> 小田原城二の丸広場, 小田原観光交流センターイベントスペース</li>
            <li><strong>主催:</strong> 北條氏ゆかりの戦国武将サミット実行委員会</li>
            <li><strong>共催:</strong> 一般社団法人小田原市観光協会, 公益社団法人小田原青年会議所</li>
            <li><strong>後援:</strong> 小田原市</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>行事内容</h2>
          
          <h3 className={styles.subSectionTitle}>１）武将末裔を招いての北條氏ゆかりの戦国武将サミット</h3>
          <p>10:00～11:00（小田原市観光交流センターイベントスペース）</p>

          <h3 className={styles.subSectionTitle}>２）ステージブース（二の丸広場）</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>時間</th>
                <th>演目</th>
                <th>団体名</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>11:00～11:20</td><td>オープニングセレモニー</td><td>小田原北条太鼓の会, (株)花政</td></tr>
              <tr><td>11:30～11:50</td><td>風魔忍者ショー</td><td>相州乱破衆「風魔」</td></tr>
              <tr><td>12:00～12:20</td><td>猿回し</td><td>(株)戦豆</td></tr>
              <tr><td>12:30～12:50</td><td>甲冑隊パフォーマンス</td><td>北条手作り甲冑隊</td></tr>
              <tr><td>13:00～13:20</td><td>ライブ生花</td><td>(株)花政</td></tr>
              <tr><td>13:30～13:50</td><td>居合術抜刀術の披露</td><td>全日本抜刀六真会</td></tr>
              <tr><td>14:00～14:20</td><td>猿回し</td><td>(株)戦豆</td></tr>
              <tr><td>14:30～14:50</td><td>風魔忍者ショー</td><td>相州乱破衆「風魔」</td></tr>
            </tbody>
          </table>

          <h3 className={styles.subSectionTitle}>３）体験ブース（二の丸広場）10:00～16:00</h3>
          <ul className={styles.list}> 
            <li>戦国ナゾトキ合戦 小田原の陣！</li>
            <li>忍者体験「手裏剣・吹き矢体験」</li>
            <li>小田原ちょうちん作成体験</li>
          </ul>

          <h3 className={styles.subSectionTitle}>４）飲食ブース</h3>
          <ul className={styles.list}>
            <li>巨大釜鍋でつくる「戦国武将なべ」の販売</li>
            <li>武将ゆかりの日本酒等の販売</li>
            <li>キッチンカー等による飲食の販売</li>
          </ul>

          <h3 className={styles.subSectionTitle}>その他</h3>
          <ul className={styles.list}>
            <li>「北条五代を大河ドラマに！」署名活動 10:00～16:00</li>
          </ul>
        </section>

      </div>
    </Layout>
  );
}
