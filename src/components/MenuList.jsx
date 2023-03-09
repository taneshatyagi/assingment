import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import { allBuckets } from '../features/bucketSlice'
import { useSelector } from 'react-redux';

export default function PositionedMenu({ moveCardTo, moveCardFrom }) {
  const buckets = useSelector(allBuckets)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{
      position: "absolute",
      top: '0.7rem',
      right: '0'
    }}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'black',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '50%',
          minWidth: 0,
          width: '2.5rem',
          height: '2.5rem',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,1)',
          }
        }}
      >
        <DriveFileMoveOutlinedIcon sx={{ fontSize: '1.5rem' }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '0.5rem',
          '& .MuiMenuItem-root': {
            color: 'black',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,1)',
            }
          }
        }}
      >
        {
          buckets.map((bucket, index) => {
            return <MenuItem key={bucket.id} onClick={() => {
              handleClose();
              moveCardFrom();
              moveCardTo(index);
            }}>{bucket.name}</MenuItem>
          })
        }
      </Menu>
    </div>
  );
}
