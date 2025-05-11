import { FaSymfony, FaNodeJs, FaBootstrap, FaPhp, FaSitemap, FaVuejs  } from "react-icons/fa";
import { SiElasticsearch, SiMariadb, SiZapier, SiPostgresql } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BsFillFilePostFill } from "react-icons/bs"; // Pour Postman
import { SiBrevo } from "react-icons/si";
import { SiJquery } from "react-icons/si";

export const experiences = [
    {
        id: 1,
        year: "2024/2025",
        title: "Alternant développeur fullstack",
        company: "Decidento",
        description: "DECIDENTO - L’intelligence commerciale B2B",
        logo: "/logo-decidento-v2-white.png",
        missions: [
            <>
                Réalisation de <strong>+8 projets</strong> (analyse, dev, tests, livraison) sous la supervision des Leads, et participation à <strong>+5 projets</strong> en équipe.
            </>,
            <>
                Amélioration et optimisation du <strong>backoffice interne (SmartAdmin/Symfony)</strong> utilisé par les équipes commerciales, rédaction et support client.
            </>,
            <>
                Développement de fonctionnalités pour <strong>l’extranet client (Vue.js/jQuery/Symfony)</strong> permettant aux abonnés de gérer leurs données et suivre leurs signaux d’affaires.
            </>,
            <>
                Mise en place d’un système <strong>d’automatisation CRM via Zapier</strong> déclenché par <strong>API Symfony</strong> : export automatique de données vers HubSpot, Salesforce, etc.
            </>,
            <>
                Développement d’outils de rédaction automatisés via des <strong>API d’IA (OpenAI, Perplexity)</strong>.
            </>,
            <>
                Intégration d’<strong>API publiques</strong> (INSEE, BODACC, etc.) pour enrichissement automatique des données B2B disponibles sur la plateforme DECIDENTO.
            </>,
            <>
                <strong>Animation de formations techniques</strong> (FR/EN) et support client autour des automatisations et des intégrations.
            </>,
            <>
                Développement de <strong>commandes Symfony</strong> pour automatiser des traitements complexes sur la base de données.
            </>,
            <>
                Contribution continue à l’amélioration de la base de code existante : <strong>refactoring, documentation, debug, performance</strong>.
            </>
        ],
        technologies: [
            { icon: FaPhp , name: "PHP" },
            { icon: FaSymfony, name: "Symfony" },
            { icon: FaVuejs, name: "Vuejs" },
            { icon: SiJquery , name: "JQuery" },
            { icon: SiMariadb, name: "Mariadb" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: SiElasticsearch, name: "Elasticsearch" },
            { icon: BsFillFilePostFill, name: "Postman" },
            { icon: FaSitemap, name: "Swagger" },
            { icon: SiZapier, name: "Zapier" },
            // { icon: SiBrevo, name: "Brevo" }
        ]
    },
    {
        id: 2,
        year: "2024",
        title: "Stage - TRI AUTO",
        company: "TRI AUTO",
        description: "Entreprise de vente de pièces détachées",
        logo: "/avatar-01.jpg",
        missions: [
            "Création d'un site en Bootstrap, Symfony, MySQL permettant aux utilisateurs de rechercher, filtrer et commander des pièces détachées en ligne.",
            "Mise en place d'un système d'administration pour la gestion des articles.",
            "Collaboration avec CIRTA IT pour lier la base de données existante de TRI AUTO avec le site."
        ],
        technologies: [
            { icon: FaSymfony, name: "Symfony" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: FaBootstrap, name: "Bootstrap" }
        ]
    },
];
