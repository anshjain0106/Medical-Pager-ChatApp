import React from 'react'
import {Avatar, ChannelPreview, useChatContext} from 'stream-chat-react'

const TeamChannelPreview = ({channel, type}) => {
    const {channel : activeChannel, client} = useChatContext();

    const channelPreview = () => (
        <p className='channel-preview__items'>#{channel?.data?.name || channel?.data?.id}</p>
        //? indicating that channel should be there before accessing data
    )//preview for channel with multiple users

    //preview for DMs
    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({user}) => user.id !== client.userID)

        return(
            <div className="channel-preview__item single">
                <Avatar 
                image={members[0]?.user.image}//?indicate user exist
                name={members[0]?.user.fullName}
                size={24}
                />
                <p>{members[0]?.user?.fullName}</p>
            </div>
        )
    }

  return (
    <div className={
        channel?.id === activeChannel?.id
        ?'channel-preview__wrapper__selected'
        :'channel-preview__wrapper'
    }
    onClick={()=>{
        console.log(channel);
    }}>
      {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
  )
}

export default TeamChannelPreview
