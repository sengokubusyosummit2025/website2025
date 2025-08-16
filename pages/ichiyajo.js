import Layout from '../components/Layout';
import styles from '../styles/Event.module.css';

export default function Ichiyajo() {
  return (
    <Layout title="第41回 一夜城まつり">
      <div className="container py-5">
        <h1 className={styles.eventTitle}>第41回 一夜城まつり</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>趣旨</h2>
          <p>
            一夜城まつりは、豊臣秀吉の天下統一の拠点となった国指定史跡の石垣山一夜城を舞台に、小田原合戦にまつわるエピソードをもとにしたまつりを開催します。歴史と伝統に培われた一夜城をより広く県内外に紹介し、観光客の誘致を図ります。
            なお、日本城郭協会が2017年4月6日に発表した「続日本100名城」に選ばれた石垣山城は、1590（天正18）年に豊臣秀吉が北条氏攻めの本陣として築いた、東日本初の総石垣の城。築城過程を隠し、一夜にして姿を現したという言い伝えから「一夜城」の名前でも知られています。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>開催概要</h2>
          <ul className={styles.list}>
            <li><strong>名称:</strong> 第41回一夜城まつり</li>
            <li><strong>日時:</strong> 令和7年11月2日(日) 10:00～15:00 <small>※雨天等の場合は中止（当日7:30に決定）</small></li>
            <li><strong>会場:</strong> 石垣山一夜城</li>
            <li><strong>主催:</strong> 北條氏ゆかりの戦国武将サミット実行委員会</li>
            <li><strong>共催:</strong> 一般社団法人小田原市観光協会, 公益社団法人小田原青年会議所</li>
            <li><strong>後援:</strong> 小田原市・神奈川県, (公社)神奈川県観光協会・小田原市自治会総連合・小田原箱根商工会議所･東日本旅客鉄道㈱横浜支社・小田急電鉄㈱・伊豆箱根鉄道㈱・㈱小田急箱根・早川商工振興会</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>交通（シャトルバスの運行）</h2>
          <p>区間：JR早川駅～会場（約30分間隔）</p>
          <p>運賃：無料</p>
          {/* シャトルバスの時刻表は後で追加 */}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>行事内容</h2>
          
          <h3 className={styles.subSectionTitle}>１）ステージブース</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>時間</th>
                <th>演目</th>
                <th>団体名</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>10:00～10:30</td><td>甲冑隊パフォーマンスⅠ</td><td>北条手作り甲冑隊</td></tr>
              <tr><td>10:40～11:00</td><td>風魔忍者ショー</td><td>相州乱破衆「風魔」</td></tr>
              <tr><td>11:10～11:25</td><td>来賓あいさつ</td><td>来賓</td></tr>
              <tr><td>11:40～12:10</td><td>甲冑隊パフォーマンスⅡ</td><td>北条手作り甲冑隊</td></tr>
              <tr><td>12:20～12:40</td><td>お囃子</td><td>早川お囃子会</td></tr>
              <tr><td>12:50～13:10</td><td>風魔忍者ショー</td><td>相州乱破衆「風魔」</td></tr>
              <tr><td>13:20～13:50</td><td>甲冑隊パフォーマンスⅢ</td><td>北条手作り甲冑隊</td></tr>
              <tr><td>14:20～14:40</td><td>おもてなしお土産抽選会</td><td>早川商工振興会</td></tr>
            </tbody>
          </table>

          <h3 className={styles.subSectionTitle}>２）体験ブース</h3>
          <ul className={styles.list}>
            <li>10:00～15:00 戦国ナゾトキ合戦 小田原の陣！</li>
            <li>10:00～15:00 忍者体験「手裏剣・吹き矢体験」</li>
          </ul>

          <h3 className={styles.subSectionTitle}>３）その他</h3>
          <ul className={styles.list}>
            <li>出店 10:00～15:00 早川商工振興会</li>
            <li>小田原宿観光回遊バス 10:00～15:00 箱根登山バス土・日・祝運行</li>
            <li>「北条五代を大河ドラマに！」署名活動 10:00～15:00</li>
          </ul>
        </section>

      </div>
    </Layout>
  );
}
