import { HistoryContainer, HistoryList } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>My history</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Start</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Task</td>
                            <td>20 minutes</td>
                            <td>At 2 months</td>
                            <td>Done</td>   
                        </tr>
                        <tr>
                            <td>Second Task</td>
                            <td>10 minutes</td>
                            <td>At 1 hour</td>
                            <td>In progress</td>   
                        </tr> 
                        <tr>
                            <td>Third Task</td>
                            <td>25 minutes</td>
                            <td>At 1 week</td>
                            <td>Interupted</td>   
                        </tr>      
                    </tbody>    
                </table>    
            </HistoryList>       
        </HistoryContainer> 
    )
}