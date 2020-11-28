import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
// import mime from 'mime-types';

const headers = {
  'Content-Type': "text/csv",
  "Access-Control-Allow-Origin": "*"
};

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

type CSVFileImportProps = {
  url: string,
  title: string
};

export default function CSVFileImport({url, title}: CSVFileImportProps) {
  const classes = useStyles();
  const [file, setFile] = useState<any>();

  const onFileChange = (e: any) => {
    console.log(e);
    let files = e.target.files || e.dataTransfer.files
    if (!files.length) return
    setFile(files.item(0));
  };

  const removeFile = () => {
    setFile('');
  };

  const uploadFile = async (e: any) => {
      
    try {
      // Get the presigned URL
      let authorization_token = localStorage.getItem('authorization_token');
      // eslint-disable-next-line
      const rewrite = confirm('Would you like to reset the [authorization_token]?');
      if (!authorization_token || rewrite) {
          // eslint-disable-next-line
          const username = prompt('Username', 'KarneyenkaDzmitry');
          const password = prompt('Password', 'TEST_PASSWORD');
          // eslint-disable-next-line
          const save = confirm('Save [authorization_token] on Local Storage?');
          authorization_token = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
          if (save) localStorage.setItem('authorization_token', authorization_token);
        }
      const response = await axios({
        method: 'GET',
        url,
        params: {
          name: encodeURIComponent(file.name)
        },
        headers: {
          Authorization: authorization_token
        }
      })

      console.log('File to upload: ', file.name)
      console.log('Uploading to: ', response.data)
    
    // const contentType = mime.lookup(file.name);
    // console.log(contentType);
    
      const result = await fetch(response.data, {
        method: 'PUT',
        body: file,
        headers
      })
      console.log('Result: ', result)
      setFile('');
    } catch (error) {
      console.log(error) 
    }
    
  }
  ;

  return (
    <div className={classes.content}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
          <input type="file" onChange={onFileChange}/>
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </div>
  );
}