import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>北條氏ゆかりの戦国武将サミット＆一夜城まつり</title>
        <meta name="description" content="北條氏ゆかりの戦国武将サミットと一夜城まつりの公式サイトです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Image src="/images/hero-image.png" alt="戦国武将サミット" width={1200} height={400} objectFit="cover" />
        <h1 className={styles.mainTitle}>北條氏ゆかりの戦国武将サミット<br/><span>＆</span><br/>一夜城まつり</h1>
      </header>

      <main className={styles.main}>
        <p className={styles.description}>
          戦国の世に思いを馳せる、二つの祭典。小田原の地で、歴史が動き出す。
        </p>

        <div className={styles.grid}>
          <Link href="/ichiyajo" passHref legacyBehavior>
            <a className={styles.card}>
              <h2>一夜城まつり &rarr;</h2>
              <p>2025年11月2日(日) 開催！秀吉の天下統一の拠点、石垣山一夜城で歴史を体感せよ。</p>
            </a>
          </Link>

          <Link href="/summit" passHref legacyBehavior>
            <a className={styles.card}>
              <h2>戦国武将サミット &rarr;</h2>
              <p>2025年11月3日(月) 開催！北條氏と武将たちの魂が、現代に蘇る。</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>主催：北條氏ゆかりの戦国武将サミット実行委員会</p>
      </footer>
    </div>
  );
}
