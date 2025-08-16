import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | 北條氏ゆかりの戦国武将サミット＆一夜城まつり</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/" legacyBehavior>
          <a>
            <h1 className={styles.siteTitle}>北條氏ゆかりの戦国武将サミット<span>＆</span>一夜城まつり</h1>
          </a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>主催：北條氏ゆかりの戦国武将サミット実行委員会</p>
      </footer>
    </div>
  );
}
