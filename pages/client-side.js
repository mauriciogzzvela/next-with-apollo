import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";
import Image from "next/image";

export default function ClientSide() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mauricio Vela</title>
                <meta name="description" content="Next.js with Apollo App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Mauricio Vela
                </h1>
                <h2 className={styles.title}>
                    Next.js with Apollo Client App
                </h2>
                <div>
                    <p className={styles.description}>  </p>
                    <code className={styles.code}>
                        <a href={"https://github.com/mauriciogzzvela"}
                           target="_blank"
                           rel="noreferrer"
                           className={styles.verticalAlignMiddle}
                        >
                            <span className={styles.logo}>
                                <Image src="/GitHub-Mark-64px.png" alt="Github Logo" width={32} height={32} />
                            </span>
                            <span>@mauriciogzzvela</span>
                        </a>
                    </code>
                </div>

                <p className={styles.descriptionPage}>
                    Client Side Rendering Page
                </p>

                <p className={styles.linkPage}>
                    <a href={"/"}>Static Rendering Page</a>
                </p>

                <p className={styles.linkPage}>
                    <a href={"/server-side"}>Server Side Rendering Page</a>
                </p>
                <ClientOnly>
                    <Countries />
                </ClientOnly>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <Image src="/vercel.svg" alt="Vercel Logo" className={styles.logo} width={72} height={16} />
                </a>
            </footer>
        </div>
    );
}
