import "./articlesScreen.css"
import { StandardCard } from "../../components/standardCard/standardCard"
import { StandardTitle } from "../../components/standardTitle/standardTitle"
import { ArticleCard } from "../../components/articleCard/articleCard"
import { ButtonRedirect } from "../../components/buttonRedirect/buttonRedirect"

export const ArticlesScreen = () => {
    return (
        <div className="articles_screen">
            <StandardCard>
                <StandardTitle
                    title="ARTIGOS"
                />

                <div className="articles_screen_content">
                    <ArticleCard
                        articleTitle="Manifesto 2000 da ONU"
                        articleLink="https://www5.pucsp.br/ecopolitica/documentos/cultura_da_paz/docs/manifesto_2000_UNESCO_cultura_da_paz.pdf"
                    />

                    <ArticleCard
                        articleTitle="Agenda 2030 para o Desenvolvimento Sustentável"
                        articleLink="https://brasil.un.org/pt-br/91863-agenda-2030-para-o-desenvolvimento-sustent%C3%A1vel"
                    />

                    <ArticleCard
                        articleTitle="Educação para a cidadania global: preparando alunos para os desafios do século XXI"
                        articleLink="https://unesdoc.unesco.org/ark:/48223/pf0000234311"
                    />
                </div>

                <ButtonRedirect
                    linkHref='/home'
                    text="VOLTAR"
                />
            </StandardCard>
        </div>
    )
}