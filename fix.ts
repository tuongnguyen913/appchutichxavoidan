import * as fs from 'fs';
import * as path from 'path';

const CT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf34MWWxwd_JiJsxsC7nx9GeTCFWle4eAZ42ao9Sp9YH7fWVgtTQCAn3Xazdnm-beH8NdbZwLF8XSSs7oYDBIXT7dypQOTmoRrCcnE7VNjQpEn-Pd9UxKaBhee1zeVImj3pCFSyratWYGhk_HeLgeprTlmjd1MbEvwZZ8HTxZWE4pVX_1sqmhPXLEP55c64N7pC7TKxEjG3NK-XBIFSN6lrAPMs93S4kQWItXoSHYH0YefWIfrmQny2QvZpgoTZS4VNHr0oRm0ahI';
const ND_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA';

// 1. Force mobile view in index.html
const indexHtmlPath = path.join(__dirname, 'src', 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
indexHtml = indexHtml.replace(
  '<body class="bg-surface-container-lowest text-on-surface font-body-md antialiased min-h-screen">',
  '<body class="bg-surface-dim sm:bg-surface-container-highest text-on-surface font-sans antialiased min-h-screen flex justify-center">\n    <app-root class="w-full max-w-[480px] bg-background min-h-screen relative sm:shadow-2xl flex flex-col items-stretch overflow-x-hidden border-x border-outline/10"></app-root>'
);
indexHtml = indexHtml.replace('    <app-root></app-root>\n', ''); // remove old app-root
fs.writeFileSync(indexHtmlPath, indexHtml);


// 2. Replace images
const walkSync = (dir: string, filelist: string[] = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else if (dirFile.endsWith('.ts') || dirFile.endsWith('.html')) {
        filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace CT avatars
  const ctRegex = /https:\/\/lh3\.googleusercontent\.com\/aida-public\/AB6AXu((Cf74xG|CfJlT|ACjDR|A6gPaq|CHrcip|AYVyjf|CAJ96H)[a-zA-Z0-9_\-]+)/g;
  if(content.match(ctRegex)) {
    content = content.replace(ctRegex, CT_IMAGE);
    changed = true;
  }
  
  // Replace ND avatars
  const ndRegex = /https:\/\/lh3\.googleusercontent\.com\/aida-public\/AB6AXu((C3afpa|AzK3yP|CLsU\-)[a-zA-Z0-9_\-]+)/g;
  if(content.match(ndRegex)) {
    content = content.replace(ndRegex, ND_IMAGE);
    changed = true;
  }
  
  // Also explicitly handled known urls 
  const knownNDs = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC3afpaB84Y3VsHxHiLB1lJSSt0M4uuz0ztF5WPZMOOvLuybthkAiYLBWMBcwg0mlOfmzbC9RPtnyBop866o_zxbadH2MkX9cKZaVhbQjDZ7G6-Itmxqm72tFfM7gwE83YwjxuxQ9C1w8b4TDROA3AzwKyDpBugCeDAUk_qQYKfjSIFJLNc-HFOab4v5pF1yqkH0KvRXc7SjL64VZadxGFv-J5n6IYkcqYXzvi-bzWh75wBx2K53FhDcIRCJwNaF1fpibbqBhfH1eo',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAzK3yPjjm9ot0X-nM4LkPyUvjRMMDx2bXsEUXY6tXHhf8D__PHF4INsWPXaeHFuZjIOx3tQVEzBToMrJ-mCQaPZt_p7m923iBpCxQVw4ZiiwNh_W4NmFUXALtNTJiKptpXaDZsMz6xjN-_ZpoKHAWMYyNDla1uyD7K6MaJGXQ3TFkwZ7LsAAYVhG4An7SycdwcdQfKnGnysHd1nPVrISLdpO60bNTB-_tfv_VtJqEquvikzyn-ZzvMS827STuGlrXG_xvSxXddBqE',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCLsU-63XKlFXu7EBT2Mhwg0soV6mxgKrpO5l8dSvlkdwERCeCwcWNtvPNcD60kVhNo48b9Yl6Aoa5aJh5DcWOyF72WusKyfVjz5xqfz9SDSSwpJWsrPan_I89sRLsIqikWkaD0Fv99ZbhcJI7RBW4ixeNGRuziJPTjBe7KiHkJRW15Cta91dWWBTLz2N7zjFb6r_CucqCLhLgPq4qJEfvo9Np2MbqiaLRFw8ZjZfQp0BkMYdvC06Ncwxb2fu91kW-ZsrHQuYeDn1k',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCs0BdhqMDv5WONywuY0XuDkzDarosuyq6_-oX0NEK7IoRgt6l-Ldw4EvyEEYpo-eo7SaKHFIHIDY0VGUznBUIMncKnp3byZAsHY7RZ_7KWxSeB-ryymDRChfIK35AEMx21ayBUk_2Jj25jsOHtlCh3326u90-9oihN8Z7iqUXgooqqTtoEh-y2QFx32F5fg_R46dVVEoU9RUbNWNWVWeGfUZv0T8Ndvr5CoVkrQn2QrElc6u4BOMJeQGunO9CEsBdCzBg6ySG5kQA'
  ];
  for (const url of knownNDs) {
    if(content.includes(url)) {
        content = content.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), ND_IMAGE);
        changed = true;
    }
  }

  const knownCTs = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCf74xG0kHheGCHmM7K4QkiXyyahQKh94GXJamrC0FoaFBBmjTxcCSjveOCba41qFo01gxFECgh3U6CLiLSpvUSiJWCUt6Tk2FHJS9J3MxWznvZocTzHVn1By_TtpExtea6FzhwZTWgZ7r5buKrpLJMfeUYxVFp3gLel1sZjBXy5PfzrOGUwQ8KM5b-atfRSLuhcoEfYDdVIqePnnRa9UPZE3B8TM40ClBT-8FQWxLdltHq2k9iubcvkw5EdIov_Epj5snxzq_WJLc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCAJ96HrDMeR0hug9NohqUYTdGrerhfMvDGZY3B2iDq9VxVHrpjgZvkdLtrVRghhb8S6-EkLvmKSFMdlxFoA15M7ta9XhXSz7kZxFnaYbkI8qvpBVODhoZYlRodJqckflFRX8tctaLmzWJFQ-rKIYBrlM1-W-z4ueg6Rnm4oDvaG1EmzgKSBGZL9XxNMAEIx8IzVtc3aw6gYoHVi0Vyy2YCOCX_ZMRpFurdbXrxAdw8KU6SAoiigWypRL-vzbckVBClotOjHl1CobY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCfJlTzQlCNZji_FBXKlKxt5Gz9uOzbRcly0qDhQTPX-byeW6FW8HrJWIQjWeBcXhmxEMlLp5osNFvKsFSfAGYxI5-RKN99AcQBdD7OuqYhPNtMVo4GipT4P4znBRc6PgMTwRcnqpB3cP4jHUj90jFs-LQscyKCxqrrHd1Q7x14NRIKx7edQuj4bjEac3rhVvg1buJObDQdibSzSdqVxS3l-HK1ZhA2ZNgHbd3_V2Kw-CXGKlrnjtQYERC4ARSKnNPO_slBYE7ggW4',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuACjDRAH-wPfvZ1ybOzeXK8epNQsJAjpA7zlKtiNd6LLcr6Ye9ZnouV7ugXiggNkCYsNJXWT9JwZ-KrNhi8BzaLVBHzNaBNa85UsCkNGjM7VkUQjVUheRz1iwphFSv4Mrla6b4FgRFyemRFfYvJlcIzwLoRsXNJ5jLmrk42gzZgyJqCPL91tgRT3ivIJUkmUGIMJRySOhnKRcjFdbFZwh55X9PB8js53SvWsGfcBdLECh1EpqwqV277oAuORdLTnxci__CoAL4m21o',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCgNRbLxGHfRwFkOKD4jPJ_ACl6K0qjbT-CvK-Z4pOnD17gj98rPXfiSSgkvg19WsA7ALR2PxZly-YsIoKhUEExd4uqPn6S9rFr5malBpcw2y9oHTEkcCXPwfiP7hKEgKQI22OF41rcNLNOI44_Gkj4Xszdj5bxG2yAf0jjfRXxPhVcfwl4n9IB9yN4jqjzUzOBO1L9hknYK6ZlGOB9sR2k7d7jgUptEnC1zx90Gjx4bDumayR2DXQn9gz4PW0M6FYXEI50dYub6s4',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA6gPaq_hqUtUR_4tvzT0mM03MjvbCo4ckTNTXh8fnUtsoT6uPh1W9JSO20sj7kS77uOBYMIYaqbfdi6JGB8ErTdjzZAgQ0hYshx-bF0YqB0B_2uU5gmh8EhFWPr59a_WOtjntQf2NP6NToVAA2mEC_uPYaoo7aRtJmh3NNnTyV_54MdA5Or4_ofYibfa4UDScTseAlgYBauldMzq-vmTkdl1_VYQA96PsOtbjZbw1y38jewYE3jTzUPkEPbL3DZJnrxpq_NMRhCHc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCHrcipoZm2NS4GoFXSsBMLd_b7CnlkxtzOloUMirpoJ9lEv-P1JvEdJAp6s6FEYnHIdzbe55YISdkfUIFpcOAt43Eii_nFJqmAHw26cKj1HfqHvkq9hACDTjG9C4PICU3FQMX3yl1pZW9z6VsKL3Tt3MO2gIymuoDCZzzFAUOpz8FrpRWdirge3EMRYIxdpYVBygZLRbjBkvA62bCFFi5JOVeQEKGndgvccrVKNt7N6CjlcGcj0EMe-07o1GN4l73w4w80yD6lf6Q',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYVyjfY_B4lXJE-y_Jo4HFfFk9bmgkzmQM3mYIKUwQrvwtYGoqg0wVSK8X65a74bgGRbJMfnr1Z3ORWKDRjKiGvYYQK1nSI-BCJuFGuaAACtCDL7gnG5emHWUEffqNFE542AW95MJhGFoFdqgeXn_VJNr0PjIUMCbpZPV0wpHJprhUbfL7sXCh6g-vDMY6rjPwu6-jHyLdWudhVNmwwdvcPi5O0ceu1fXm7mOBdxi_jI0onxgfR9yhBkbLwl8ufjP07EV9EclTlE8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDLCsC7Uumix0VhJAuU3Roak-wqoV0VlBwyzSyTkU7zGsLWVmdpwndmhP3TZwofQxMXEp6M2jEYNsu9ROqOvmDtjCPfwft6uyWrIZ9fLQiY8cl2PYQwXxFAWTCHIt9eZLnEFbGl5JXsxQQxpK5aVA7qPoM9I6cCX7b5VtrsIQMk45eNrXEgmbhseDBq8j3SoXvkMJvAKwc3nSs8mY1IGFZUw7mDSz0ZJKrJLP1sG5NnSwbyVvWD4aszqpev2KE8k-CiXM-KXRbxOpo'
  ];
  for (const url of knownCTs) {
    if(content.includes(url)) {
        content = content.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), CT_IMAGE);
        changed = true;
    }
  }


  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
