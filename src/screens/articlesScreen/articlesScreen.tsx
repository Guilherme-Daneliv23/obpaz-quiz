import "./articlesScreen.css"
import { StandardCard } from "../../components/standardCard/standardCard"
import { StandardTitle } from "../../components/standardTitle/standardTitle"
import { ArticleCard } from "../../components/articleCard/articleCard"
import { ButtonReturn } from "../../components/buttonReturn/buttonReturn"

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
                        articleLink="#"
                    />

                    <ArticleCard
                        articleTitle="Manifesto 2000 da ONU"
                        articleLink="#"
                    />

                    <ArticleCard
                        articleTitle="Manifesto 2000 da ONU"
                        articleLink="#"
                    />
                </div>

                 <ButtonReturn
                    linkHref='/home'
                />
            </StandardCard>
        </div>
    )
}