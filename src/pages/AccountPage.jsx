import AddAccount from '../components/AddAccount'

const AccountPage = ({addProfiles}) => {
    return (
        <>
        <h1>Account Page</h1>
        <AddAccount addProfiles={addProfiles}/>
        </>
        
    )
}

export default AccountPage;