//
//

import React, { useEffect, useState } from 'react';

import '../styles/Sidebar.scss';
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from '@material-ui/icons';
import SidebarOption from './SidebarOption';

import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Clever Coder</h2>
          <h3>
            <FiberManualRecord />
            {/* Bozo Boy */}
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title='Threads' />
      <SidebarOption Icon={Inbox} title='Mentions & Reactions' />
      <SidebarOption Icon={Drafts} title='Saved Items' />
      <SidebarOption Icon={BookmarkBorder} title='Channel Browser' />
      <SidebarOption Icon={PeopleAlt} title='People & User Groups' />
      <SidebarOption Icon={Apps} title='Apps' />
      <SidebarOption Icon={FileCopy} title='File Browser' />
      <SidebarOption Icon={ExpandLess} title='Show Less' />
      <hr />
      <SidebarOption Icon={ExpandMore} title='Show More' />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title='Add Channel' />

      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
