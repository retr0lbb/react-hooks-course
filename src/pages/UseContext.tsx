import { PageContent } from "../components/layout/PageContent"
import { DataContext, DataInterface } from "../data/data.context"
import { useContext } from "react";

export const UseContext: React.FC = () => {


    const context = useContext(DataContext);
    
    context.setState({
        text: "amarilho"
    })
    
    return(
        <PageContent>
            {context.text}
        </PageContent>
    )
}