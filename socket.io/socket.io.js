
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <script type="text/javascript">var NREUMQ=[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);</script>
        <title>socket.io.js at 06 from LearnBoost/Socket.IO - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://a248.e.akamai.net/assets.github.com/0906e92d585b0180aae00108a58dc63ee67817bb/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://a248.e.akamai.net/assets.github.com'
      }
      var github_user = 'temsa'
      
    </script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/jquery/jquery-1.6.1.min.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/df956834986045362077968f64fceb78826da356/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "LearnBoost/Socket.IO"
      })
    </script>

    
  <link rel='canonical' href='/LearnBoost/Socket.IO/blob/804c4e281e67b0a74a41a01f34103461c5788612/socket.io.js'>

  <link href="https://github.com/LearnBoost/Socket.IO/commits/06.atom" rel="alternate" title="Recent Commits to Socket.IO:06" type="application/atom+xml" />

    <META NAME="ROBOTS" CONTENT="NOINDEX, FOLLOW">    <meta name="description" content="Socket.IO - Sockets for the rest of us" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "LearnBoost/Socket.IO";
      GitHub.currentRef = '06';
      GitHub.commitSHA = "804c4e281e67b0a74a41a01f34103461c5788612";
      GitHub.currentPath = 'socket.io.js';
      GitHub.masterBranch = "master";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      _gaq.push(['_trackPageLoadTime']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_in page-blob  linux env-production">
    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com/">
            
            <img alt="github" class="default" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov5.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov5-hover.png" />
            <!--<![endif]-->
          </a>
        
        
          





  
    <div class="userbox">
      <div class="avatarname">
        <a href="https://github.com/temsa"><img src="https://secure.gravatar.com/avatar/32547db4ac6016b7ef8e02f9244e009b?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="20" height="20"  /></a>
        <a href="https://github.com/temsa" class="name">temsa</a>

        
        
          <a href="https://github.com/inbox/notifications" class="unread_count notifications_count new tooltipped downwards js-notification-count" title="Unread Notifications">3</a>
        
      </div>
      <ul class="usernav">
        <li><a href="https://github.com/">Dashboard</a></li>
        <li>
          
          <a href="https://github.com/inbox">Inbox</a>
          <a href="https://github.com/inbox" class="unread_count ">0</a>
        </li>
        <li><a href="https://github.com/account">Account Settings</a></li>
        <li><a href="/logout">Log Out</a></li>
      </ul>
    </div><!-- /.userbox -->
  


        
        <div class="topsearch">
  
    <form action="/search" id="top_search_form" method="get">
      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <div class="search placeholder-field js-placeholder-field">
        <label class="placeholder" for="global-search-field">Search…</label>
        <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" /> <input type="submit" value="Search" class="button" />
      </div>
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
    </form>
    <ul class="nav">
      <li><a href="/explore">Explore GitHub</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      
      <li><a href="/blog">Blog</a></li>
      
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public    instapaper_ignore readability-menu">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/LearnBoost">LearnBoost</a> / <strong><a href="/LearnBoost/Socket.IO">Socket.IO</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="/LearnBoost/Socket.IO/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/LearnBoost/Socket.IO/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '77e9e478f02fd3007a1b00492bbf47498aedbeda'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/LearnBoost/Socket.IO/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '77e9e478f02fd3007a1b00492bbf47498aedbeda'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked"><a href="#fork_box" class="minibutton btn-fork " rel="facebox"><span><span class="icon"></span>Fork</span></a></li>
            

            <div id="fork_box" style="display:none">
              <h2>Where do you want to fork this to?</h2>
              
                <div class="full-button">
                  <form action="/LearnBoost/Socket.IO/fork" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="77e9e478f02fd3007a1b00492bbf47498aedbeda" /></div>
                    <button class="classy"><span>Fork to temsa</span></button>
                  </form>
                </div>
              
              
                <div class="rule"></div>
                
                  <div class="full-button">
                    <form action="/LearnBoost/Socket.IO/fork" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="77e9e478f02fd3007a1b00492bbf47498aedbeda" /></div>
                      <input id="organization" name="organization" type="hidden" value="pullrequest" />
                      <button class="classy"><span>Fork to pullrequest (organization)</span></button>
                    </form>
                  </div>
                
              
            </div>
          

          <li id='pull_request_item' class='nspr' style='display:none'><a href="/LearnBoost/Socket.IO/pull/new/06" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a></li>
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/LearnBoost/Socket.IO/watchers" title="Watchers" class="tooltipped downwards">1,278</a></li>
          <li class="forks"><a href="/LearnBoost/Socket.IO/network" title="Forks" class="tooltipped downwards">98</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="/LearnBoost/Socket.IO/tree/06" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="/LearnBoost/Socket.IO/commits/06" highlight="repo_commits">Commits</a></li>
    <li><a href="/LearnBoost/Socket.IO/network" highlight="repo_network">Network</a></li>
    <li><a href="/LearnBoost/Socket.IO/pulls" highlight="repo_pulls">Pull Requests (18)</a></li>

    

    
      
      <li><a href="/LearnBoost/Socket.IO/issues" highlight="issues">Issues (63)</a></li>
    

            
    <li><a href="/LearnBoost/Socket.IO/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>06</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="/LearnBoost/Socket.IO/branches" class="dropdown">Switch Branches (3)</a>
      <ul>
        
          
            <li><strong>06 &#x2713;</strong></li>
            
          
          
            <li><a href="/LearnBoost/Socket.IO/blob/develop/socket.io.js" data-name="develop">develop</a></li>
          
        
          
          
            <li><a href="/LearnBoost/Socket.IO/blob/master/socket.io.js" data-name="master">master</a></li>
          
        
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown ">Switch Tags (22)</a>
              <ul>
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.6.3/socket.io.js" data-name="0.6.3">0.6.3</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.6.2/socket.io.js" data-name="0.6.2">0.6.2</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.6.1/socket.io.js" data-name="0.6.1">0.6.1</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.6/socket.io.js" data-name="0.6">0.6</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.5.3/socket.io.js" data-name="0.5.3">0.5.3</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.5.2/socket.io.js" data-name="0.5.2">0.5.2</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.5.1/socket.io.js" data-name="0.5.1">0.5.1</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.5/socket.io.js" data-name="0.5">0.5</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.2.4/socket.io.js" data-name="0.2.4">0.2.4</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.2.3/socket.io.js" data-name="0.2.3">0.2.3</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.2.2/socket.io.js" data-name="0.2.2">0.2.2</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.2.1/socket.io.js" data-name="0.2.1">0.2.1</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.2.0/socket.io.js" data-name="0.2.0">0.2.0</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.8/socket.io.js" data-name="0.1.8">0.1.8</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.7/socket.io.js" data-name="0.1.7">0.1.7</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.6/socket.io.js" data-name="0.1.6">0.1.6</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.5/socket.io.js" data-name="0.1.5">0.1.5</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.4/socket.io.js" data-name="0.1.4">0.1.4</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.3/socket.io.js" data-name="0.1.3">0.1.3</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.2/socket.io.js" data-name="0.1.2">0.1.2</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1.1/socket.io.js" data-name="0.1.1">0.1.1</a></li>
            
                      
              <li><a href="/LearnBoost/Socket.IO/blob/0.1/socket.io.js" data-name="0.1">0.1</a></li>
            
                  </ul>
      
    </li>
    <li>
    
    <a href="/LearnBoost/Socket.IO/branches/06" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/LearnBoost/Socket.IO/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>Sockets for the rest of us
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/LearnBoost/Socket.IO/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="77e9e478f02fd3007a1b00492bbf47498aedbeda" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="Sockets for the rest of us">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://socket.io" rel="nofollow">http://socket.io</a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/LearnBoost/Socket.IO/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="77e9e478f02fd3007a1b00492bbf47498aedbeda" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://socket.io">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
      <div id="url_box" class="url-box">
  

  <ul class="clone-urls">
    
      
      <li id="http_clone_url"><a href="https://github.com/LearnBoost/Socket.IO.git" data-permissions="Read-Only">HTTP</a></li>
      <li id="public_clone_url"><a href="git://github.com/LearnBoost/Socket.IO.git" data-permissions="Read-Only">Git Read-Only</a></li>
    
    
  </ul>
  <input type="text" spellcheck="false" id="url_field" class="url-field" />
        <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

  <p id="url_description"><strong>Read+Write</strong> access</p>
</div>

    </div>

    <div class="frame frame-center tree-finder" style="display:none">
      <div class="breadcrumb">
        <b><a href="/LearnBoost/Socket.IO">Socket.IO</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/LearnBoost/Socket.IO/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>


        

      </div><!-- /.pagehead -->

      

  







<script type="text/javascript">
  GitHub.downloadRepo = '/LearnBoost/Socket.IO/archives/06'
  GitHub.revType = "ref"

  GitHub.repoName = "Socket.IO"
  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  
    GitHub.loggedIn = true
    GitHub.hasWriteAccess = false
    GitHub.hasAdminAccess = false
    GitHub.watchingRepo = false
    GitHub.ignoredRepo = false
    GitHub.hasForkOfRepo = ""
    GitHub.hasForked = false
  

  
</script>




<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/LearnBoost/Socket.IO/commit/804c4e281e67b0a74a41a01f34103461c5788612">Updated build</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/486e20e16ef676a02ac0299d2f92b813?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/guille">guille</a> <span>(author)</span></div>
        <div class="date">
          <time class="js-relative-date" datetime="2011-06-09T14:04:20-07:00" title="2011-06-09 14:04:20">June 09, 2011</time>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/LearnBoost/Socket.IO/commit/804c4e281e67b0a74a41a01f34103461c5788612" hotkey="c">804c4e281e67b0a74a41</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/LearnBoost/Socket.IO/tree/804c4e281e67b0a74a41a01f34103461c5788612" hotkey="t">ed630cbe4e8abbdad651</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/LearnBoost/Socket.IO/tree/d3f41d67a9971f1ae44acf2837d18c7d21afbb50" hotkey="p">d3f41d67a9971f1ae44a</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="socket.io.js/">
      <b><a href="/LearnBoost/Socket.IO/tree/804c4e281e67b0a74a41a01f34103461c5788612">Socket.IO</a></b> / socket.io.js       <span style="display:none" id="clippy_209">socket.io.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_209&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_209&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="socket.io.js/" data-canonical-url="/LearnBoost/Socket.IO/blob/804c4e281e67b0a74a41a01f34103461c5788612/socket.io.js">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/LearnBoost/Socket.IO/edit/__current_ref__/socket.io.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                
                  <span>2231 lines (2045 sloc)</span>
                
                <span>77.215 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/LearnBoost/Socket.IO/raw/0.6.3/socket.io.js" id="raw-url">raw</a></li>
                
                  <li><a href="/LearnBoost/Socket.IO/blame/0.6.3/socket.io.js">blame</a></li>
                
                <li><a href="/LearnBoost/Socket.IO/commits/0.6.3/socket.io.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>
<span id="L1776" rel="#L1776">1776</span>
<span id="L1777" rel="#L1777">1777</span>
<span id="L1778" rel="#L1778">1778</span>
<span id="L1779" rel="#L1779">1779</span>
<span id="L1780" rel="#L1780">1780</span>
<span id="L1781" rel="#L1781">1781</span>
<span id="L1782" rel="#L1782">1782</span>
<span id="L1783" rel="#L1783">1783</span>
<span id="L1784" rel="#L1784">1784</span>
<span id="L1785" rel="#L1785">1785</span>
<span id="L1786" rel="#L1786">1786</span>
<span id="L1787" rel="#L1787">1787</span>
<span id="L1788" rel="#L1788">1788</span>
<span id="L1789" rel="#L1789">1789</span>
<span id="L1790" rel="#L1790">1790</span>
<span id="L1791" rel="#L1791">1791</span>
<span id="L1792" rel="#L1792">1792</span>
<span id="L1793" rel="#L1793">1793</span>
<span id="L1794" rel="#L1794">1794</span>
<span id="L1795" rel="#L1795">1795</span>
<span id="L1796" rel="#L1796">1796</span>
<span id="L1797" rel="#L1797">1797</span>
<span id="L1798" rel="#L1798">1798</span>
<span id="L1799" rel="#L1799">1799</span>
<span id="L1800" rel="#L1800">1800</span>
<span id="L1801" rel="#L1801">1801</span>
<span id="L1802" rel="#L1802">1802</span>
<span id="L1803" rel="#L1803">1803</span>
<span id="L1804" rel="#L1804">1804</span>
<span id="L1805" rel="#L1805">1805</span>
<span id="L1806" rel="#L1806">1806</span>
<span id="L1807" rel="#L1807">1807</span>
<span id="L1808" rel="#L1808">1808</span>
<span id="L1809" rel="#L1809">1809</span>
<span id="L1810" rel="#L1810">1810</span>
<span id="L1811" rel="#L1811">1811</span>
<span id="L1812" rel="#L1812">1812</span>
<span id="L1813" rel="#L1813">1813</span>
<span id="L1814" rel="#L1814">1814</span>
<span id="L1815" rel="#L1815">1815</span>
<span id="L1816" rel="#L1816">1816</span>
<span id="L1817" rel="#L1817">1817</span>
<span id="L1818" rel="#L1818">1818</span>
<span id="L1819" rel="#L1819">1819</span>
<span id="L1820" rel="#L1820">1820</span>
<span id="L1821" rel="#L1821">1821</span>
<span id="L1822" rel="#L1822">1822</span>
<span id="L1823" rel="#L1823">1823</span>
<span id="L1824" rel="#L1824">1824</span>
<span id="L1825" rel="#L1825">1825</span>
<span id="L1826" rel="#L1826">1826</span>
<span id="L1827" rel="#L1827">1827</span>
<span id="L1828" rel="#L1828">1828</span>
<span id="L1829" rel="#L1829">1829</span>
<span id="L1830" rel="#L1830">1830</span>
<span id="L1831" rel="#L1831">1831</span>
<span id="L1832" rel="#L1832">1832</span>
<span id="L1833" rel="#L1833">1833</span>
<span id="L1834" rel="#L1834">1834</span>
<span id="L1835" rel="#L1835">1835</span>
<span id="L1836" rel="#L1836">1836</span>
<span id="L1837" rel="#L1837">1837</span>
<span id="L1838" rel="#L1838">1838</span>
<span id="L1839" rel="#L1839">1839</span>
<span id="L1840" rel="#L1840">1840</span>
<span id="L1841" rel="#L1841">1841</span>
<span id="L1842" rel="#L1842">1842</span>
<span id="L1843" rel="#L1843">1843</span>
<span id="L1844" rel="#L1844">1844</span>
<span id="L1845" rel="#L1845">1845</span>
<span id="L1846" rel="#L1846">1846</span>
<span id="L1847" rel="#L1847">1847</span>
<span id="L1848" rel="#L1848">1848</span>
<span id="L1849" rel="#L1849">1849</span>
<span id="L1850" rel="#L1850">1850</span>
<span id="L1851" rel="#L1851">1851</span>
<span id="L1852" rel="#L1852">1852</span>
<span id="L1853" rel="#L1853">1853</span>
<span id="L1854" rel="#L1854">1854</span>
<span id="L1855" rel="#L1855">1855</span>
<span id="L1856" rel="#L1856">1856</span>
<span id="L1857" rel="#L1857">1857</span>
<span id="L1858" rel="#L1858">1858</span>
<span id="L1859" rel="#L1859">1859</span>
<span id="L1860" rel="#L1860">1860</span>
<span id="L1861" rel="#L1861">1861</span>
<span id="L1862" rel="#L1862">1862</span>
<span id="L1863" rel="#L1863">1863</span>
<span id="L1864" rel="#L1864">1864</span>
<span id="L1865" rel="#L1865">1865</span>
<span id="L1866" rel="#L1866">1866</span>
<span id="L1867" rel="#L1867">1867</span>
<span id="L1868" rel="#L1868">1868</span>
<span id="L1869" rel="#L1869">1869</span>
<span id="L1870" rel="#L1870">1870</span>
<span id="L1871" rel="#L1871">1871</span>
<span id="L1872" rel="#L1872">1872</span>
<span id="L1873" rel="#L1873">1873</span>
<span id="L1874" rel="#L1874">1874</span>
<span id="L1875" rel="#L1875">1875</span>
<span id="L1876" rel="#L1876">1876</span>
<span id="L1877" rel="#L1877">1877</span>
<span id="L1878" rel="#L1878">1878</span>
<span id="L1879" rel="#L1879">1879</span>
<span id="L1880" rel="#L1880">1880</span>
<span id="L1881" rel="#L1881">1881</span>
<span id="L1882" rel="#L1882">1882</span>
<span id="L1883" rel="#L1883">1883</span>
<span id="L1884" rel="#L1884">1884</span>
<span id="L1885" rel="#L1885">1885</span>
<span id="L1886" rel="#L1886">1886</span>
<span id="L1887" rel="#L1887">1887</span>
<span id="L1888" rel="#L1888">1888</span>
<span id="L1889" rel="#L1889">1889</span>
<span id="L1890" rel="#L1890">1890</span>
<span id="L1891" rel="#L1891">1891</span>
<span id="L1892" rel="#L1892">1892</span>
<span id="L1893" rel="#L1893">1893</span>
<span id="L1894" rel="#L1894">1894</span>
<span id="L1895" rel="#L1895">1895</span>
<span id="L1896" rel="#L1896">1896</span>
<span id="L1897" rel="#L1897">1897</span>
<span id="L1898" rel="#L1898">1898</span>
<span id="L1899" rel="#L1899">1899</span>
<span id="L1900" rel="#L1900">1900</span>
<span id="L1901" rel="#L1901">1901</span>
<span id="L1902" rel="#L1902">1902</span>
<span id="L1903" rel="#L1903">1903</span>
<span id="L1904" rel="#L1904">1904</span>
<span id="L1905" rel="#L1905">1905</span>
<span id="L1906" rel="#L1906">1906</span>
<span id="L1907" rel="#L1907">1907</span>
<span id="L1908" rel="#L1908">1908</span>
<span id="L1909" rel="#L1909">1909</span>
<span id="L1910" rel="#L1910">1910</span>
<span id="L1911" rel="#L1911">1911</span>
<span id="L1912" rel="#L1912">1912</span>
<span id="L1913" rel="#L1913">1913</span>
<span id="L1914" rel="#L1914">1914</span>
<span id="L1915" rel="#L1915">1915</span>
<span id="L1916" rel="#L1916">1916</span>
<span id="L1917" rel="#L1917">1917</span>
<span id="L1918" rel="#L1918">1918</span>
<span id="L1919" rel="#L1919">1919</span>
<span id="L1920" rel="#L1920">1920</span>
<span id="L1921" rel="#L1921">1921</span>
<span id="L1922" rel="#L1922">1922</span>
<span id="L1923" rel="#L1923">1923</span>
<span id="L1924" rel="#L1924">1924</span>
<span id="L1925" rel="#L1925">1925</span>
<span id="L1926" rel="#L1926">1926</span>
<span id="L1927" rel="#L1927">1927</span>
<span id="L1928" rel="#L1928">1928</span>
<span id="L1929" rel="#L1929">1929</span>
<span id="L1930" rel="#L1930">1930</span>
<span id="L1931" rel="#L1931">1931</span>
<span id="L1932" rel="#L1932">1932</span>
<span id="L1933" rel="#L1933">1933</span>
<span id="L1934" rel="#L1934">1934</span>
<span id="L1935" rel="#L1935">1935</span>
<span id="L1936" rel="#L1936">1936</span>
<span id="L1937" rel="#L1937">1937</span>
<span id="L1938" rel="#L1938">1938</span>
<span id="L1939" rel="#L1939">1939</span>
<span id="L1940" rel="#L1940">1940</span>
<span id="L1941" rel="#L1941">1941</span>
<span id="L1942" rel="#L1942">1942</span>
<span id="L1943" rel="#L1943">1943</span>
<span id="L1944" rel="#L1944">1944</span>
<span id="L1945" rel="#L1945">1945</span>
<span id="L1946" rel="#L1946">1946</span>
<span id="L1947" rel="#L1947">1947</span>
<span id="L1948" rel="#L1948">1948</span>
<span id="L1949" rel="#L1949">1949</span>
<span id="L1950" rel="#L1950">1950</span>
<span id="L1951" rel="#L1951">1951</span>
<span id="L1952" rel="#L1952">1952</span>
<span id="L1953" rel="#L1953">1953</span>
<span id="L1954" rel="#L1954">1954</span>
<span id="L1955" rel="#L1955">1955</span>
<span id="L1956" rel="#L1956">1956</span>
<span id="L1957" rel="#L1957">1957</span>
<span id="L1958" rel="#L1958">1958</span>
<span id="L1959" rel="#L1959">1959</span>
<span id="L1960" rel="#L1960">1960</span>
<span id="L1961" rel="#L1961">1961</span>
<span id="L1962" rel="#L1962">1962</span>
<span id="L1963" rel="#L1963">1963</span>
<span id="L1964" rel="#L1964">1964</span>
<span id="L1965" rel="#L1965">1965</span>
<span id="L1966" rel="#L1966">1966</span>
<span id="L1967" rel="#L1967">1967</span>
<span id="L1968" rel="#L1968">1968</span>
<span id="L1969" rel="#L1969">1969</span>
<span id="L1970" rel="#L1970">1970</span>
<span id="L1971" rel="#L1971">1971</span>
<span id="L1972" rel="#L1972">1972</span>
<span id="L1973" rel="#L1973">1973</span>
<span id="L1974" rel="#L1974">1974</span>
<span id="L1975" rel="#L1975">1975</span>
<span id="L1976" rel="#L1976">1976</span>
<span id="L1977" rel="#L1977">1977</span>
<span id="L1978" rel="#L1978">1978</span>
<span id="L1979" rel="#L1979">1979</span>
<span id="L1980" rel="#L1980">1980</span>
<span id="L1981" rel="#L1981">1981</span>
<span id="L1982" rel="#L1982">1982</span>
<span id="L1983" rel="#L1983">1983</span>
<span id="L1984" rel="#L1984">1984</span>
<span id="L1985" rel="#L1985">1985</span>
<span id="L1986" rel="#L1986">1986</span>
<span id="L1987" rel="#L1987">1987</span>
<span id="L1988" rel="#L1988">1988</span>
<span id="L1989" rel="#L1989">1989</span>
<span id="L1990" rel="#L1990">1990</span>
<span id="L1991" rel="#L1991">1991</span>
<span id="L1992" rel="#L1992">1992</span>
<span id="L1993" rel="#L1993">1993</span>
<span id="L1994" rel="#L1994">1994</span>
<span id="L1995" rel="#L1995">1995</span>
<span id="L1996" rel="#L1996">1996</span>
<span id="L1997" rel="#L1997">1997</span>
<span id="L1998" rel="#L1998">1998</span>
<span id="L1999" rel="#L1999">1999</span>
<span id="L2000" rel="#L2000">2000</span>
<span id="L2001" rel="#L2001">2001</span>
<span id="L2002" rel="#L2002">2002</span>
<span id="L2003" rel="#L2003">2003</span>
<span id="L2004" rel="#L2004">2004</span>
<span id="L2005" rel="#L2005">2005</span>
<span id="L2006" rel="#L2006">2006</span>
<span id="L2007" rel="#L2007">2007</span>
<span id="L2008" rel="#L2008">2008</span>
<span id="L2009" rel="#L2009">2009</span>
<span id="L2010" rel="#L2010">2010</span>
<span id="L2011" rel="#L2011">2011</span>
<span id="L2012" rel="#L2012">2012</span>
<span id="L2013" rel="#L2013">2013</span>
<span id="L2014" rel="#L2014">2014</span>
<span id="L2015" rel="#L2015">2015</span>
<span id="L2016" rel="#L2016">2016</span>
<span id="L2017" rel="#L2017">2017</span>
<span id="L2018" rel="#L2018">2018</span>
<span id="L2019" rel="#L2019">2019</span>
<span id="L2020" rel="#L2020">2020</span>
<span id="L2021" rel="#L2021">2021</span>
<span id="L2022" rel="#L2022">2022</span>
<span id="L2023" rel="#L2023">2023</span>
<span id="L2024" rel="#L2024">2024</span>
<span id="L2025" rel="#L2025">2025</span>
<span id="L2026" rel="#L2026">2026</span>
<span id="L2027" rel="#L2027">2027</span>
<span id="L2028" rel="#L2028">2028</span>
<span id="L2029" rel="#L2029">2029</span>
<span id="L2030" rel="#L2030">2030</span>
<span id="L2031" rel="#L2031">2031</span>
<span id="L2032" rel="#L2032">2032</span>
<span id="L2033" rel="#L2033">2033</span>
<span id="L2034" rel="#L2034">2034</span>
<span id="L2035" rel="#L2035">2035</span>
<span id="L2036" rel="#L2036">2036</span>
<span id="L2037" rel="#L2037">2037</span>
<span id="L2038" rel="#L2038">2038</span>
<span id="L2039" rel="#L2039">2039</span>
<span id="L2040" rel="#L2040">2040</span>
<span id="L2041" rel="#L2041">2041</span>
<span id="L2042" rel="#L2042">2042</span>
<span id="L2043" rel="#L2043">2043</span>
<span id="L2044" rel="#L2044">2044</span>
<span id="L2045" rel="#L2045">2045</span>
<span id="L2046" rel="#L2046">2046</span>
<span id="L2047" rel="#L2047">2047</span>
<span id="L2048" rel="#L2048">2048</span>
<span id="L2049" rel="#L2049">2049</span>
<span id="L2050" rel="#L2050">2050</span>
<span id="L2051" rel="#L2051">2051</span>
<span id="L2052" rel="#L2052">2052</span>
<span id="L2053" rel="#L2053">2053</span>
<span id="L2054" rel="#L2054">2054</span>
<span id="L2055" rel="#L2055">2055</span>
<span id="L2056" rel="#L2056">2056</span>
<span id="L2057" rel="#L2057">2057</span>
<span id="L2058" rel="#L2058">2058</span>
<span id="L2059" rel="#L2059">2059</span>
<span id="L2060" rel="#L2060">2060</span>
<span id="L2061" rel="#L2061">2061</span>
<span id="L2062" rel="#L2062">2062</span>
<span id="L2063" rel="#L2063">2063</span>
<span id="L2064" rel="#L2064">2064</span>
<span id="L2065" rel="#L2065">2065</span>
<span id="L2066" rel="#L2066">2066</span>
<span id="L2067" rel="#L2067">2067</span>
<span id="L2068" rel="#L2068">2068</span>
<span id="L2069" rel="#L2069">2069</span>
<span id="L2070" rel="#L2070">2070</span>
<span id="L2071" rel="#L2071">2071</span>
<span id="L2072" rel="#L2072">2072</span>
<span id="L2073" rel="#L2073">2073</span>
<span id="L2074" rel="#L2074">2074</span>
<span id="L2075" rel="#L2075">2075</span>
<span id="L2076" rel="#L2076">2076</span>
<span id="L2077" rel="#L2077">2077</span>
<span id="L2078" rel="#L2078">2078</span>
<span id="L2079" rel="#L2079">2079</span>
<span id="L2080" rel="#L2080">2080</span>
<span id="L2081" rel="#L2081">2081</span>
<span id="L2082" rel="#L2082">2082</span>
<span id="L2083" rel="#L2083">2083</span>
<span id="L2084" rel="#L2084">2084</span>
<span id="L2085" rel="#L2085">2085</span>
<span id="L2086" rel="#L2086">2086</span>
<span id="L2087" rel="#L2087">2087</span>
<span id="L2088" rel="#L2088">2088</span>
<span id="L2089" rel="#L2089">2089</span>
<span id="L2090" rel="#L2090">2090</span>
<span id="L2091" rel="#L2091">2091</span>
<span id="L2092" rel="#L2092">2092</span>
<span id="L2093" rel="#L2093">2093</span>
<span id="L2094" rel="#L2094">2094</span>
<span id="L2095" rel="#L2095">2095</span>
<span id="L2096" rel="#L2096">2096</span>
<span id="L2097" rel="#L2097">2097</span>
<span id="L2098" rel="#L2098">2098</span>
<span id="L2099" rel="#L2099">2099</span>
<span id="L2100" rel="#L2100">2100</span>
<span id="L2101" rel="#L2101">2101</span>
<span id="L2102" rel="#L2102">2102</span>
<span id="L2103" rel="#L2103">2103</span>
<span id="L2104" rel="#L2104">2104</span>
<span id="L2105" rel="#L2105">2105</span>
<span id="L2106" rel="#L2106">2106</span>
<span id="L2107" rel="#L2107">2107</span>
<span id="L2108" rel="#L2108">2108</span>
<span id="L2109" rel="#L2109">2109</span>
<span id="L2110" rel="#L2110">2110</span>
<span id="L2111" rel="#L2111">2111</span>
<span id="L2112" rel="#L2112">2112</span>
<span id="L2113" rel="#L2113">2113</span>
<span id="L2114" rel="#L2114">2114</span>
<span id="L2115" rel="#L2115">2115</span>
<span id="L2116" rel="#L2116">2116</span>
<span id="L2117" rel="#L2117">2117</span>
<span id="L2118" rel="#L2118">2118</span>
<span id="L2119" rel="#L2119">2119</span>
<span id="L2120" rel="#L2120">2120</span>
<span id="L2121" rel="#L2121">2121</span>
<span id="L2122" rel="#L2122">2122</span>
<span id="L2123" rel="#L2123">2123</span>
<span id="L2124" rel="#L2124">2124</span>
<span id="L2125" rel="#L2125">2125</span>
<span id="L2126" rel="#L2126">2126</span>
<span id="L2127" rel="#L2127">2127</span>
<span id="L2128" rel="#L2128">2128</span>
<span id="L2129" rel="#L2129">2129</span>
<span id="L2130" rel="#L2130">2130</span>
<span id="L2131" rel="#L2131">2131</span>
<span id="L2132" rel="#L2132">2132</span>
<span id="L2133" rel="#L2133">2133</span>
<span id="L2134" rel="#L2134">2134</span>
<span id="L2135" rel="#L2135">2135</span>
<span id="L2136" rel="#L2136">2136</span>
<span id="L2137" rel="#L2137">2137</span>
<span id="L2138" rel="#L2138">2138</span>
<span id="L2139" rel="#L2139">2139</span>
<span id="L2140" rel="#L2140">2140</span>
<span id="L2141" rel="#L2141">2141</span>
<span id="L2142" rel="#L2142">2142</span>
<span id="L2143" rel="#L2143">2143</span>
<span id="L2144" rel="#L2144">2144</span>
<span id="L2145" rel="#L2145">2145</span>
<span id="L2146" rel="#L2146">2146</span>
<span id="L2147" rel="#L2147">2147</span>
<span id="L2148" rel="#L2148">2148</span>
<span id="L2149" rel="#L2149">2149</span>
<span id="L2150" rel="#L2150">2150</span>
<span id="L2151" rel="#L2151">2151</span>
<span id="L2152" rel="#L2152">2152</span>
<span id="L2153" rel="#L2153">2153</span>
<span id="L2154" rel="#L2154">2154</span>
<span id="L2155" rel="#L2155">2155</span>
<span id="L2156" rel="#L2156">2156</span>
<span id="L2157" rel="#L2157">2157</span>
<span id="L2158" rel="#L2158">2158</span>
<span id="L2159" rel="#L2159">2159</span>
<span id="L2160" rel="#L2160">2160</span>
<span id="L2161" rel="#L2161">2161</span>
<span id="L2162" rel="#L2162">2162</span>
<span id="L2163" rel="#L2163">2163</span>
<span id="L2164" rel="#L2164">2164</span>
<span id="L2165" rel="#L2165">2165</span>
<span id="L2166" rel="#L2166">2166</span>
<span id="L2167" rel="#L2167">2167</span>
<span id="L2168" rel="#L2168">2168</span>
<span id="L2169" rel="#L2169">2169</span>
<span id="L2170" rel="#L2170">2170</span>
<span id="L2171" rel="#L2171">2171</span>
<span id="L2172" rel="#L2172">2172</span>
<span id="L2173" rel="#L2173">2173</span>
<span id="L2174" rel="#L2174">2174</span>
<span id="L2175" rel="#L2175">2175</span>
<span id="L2176" rel="#L2176">2176</span>
<span id="L2177" rel="#L2177">2177</span>
<span id="L2178" rel="#L2178">2178</span>
<span id="L2179" rel="#L2179">2179</span>
<span id="L2180" rel="#L2180">2180</span>
<span id="L2181" rel="#L2181">2181</span>
<span id="L2182" rel="#L2182">2182</span>
<span id="L2183" rel="#L2183">2183</span>
<span id="L2184" rel="#L2184">2184</span>
<span id="L2185" rel="#L2185">2185</span>
<span id="L2186" rel="#L2186">2186</span>
<span id="L2187" rel="#L2187">2187</span>
<span id="L2188" rel="#L2188">2188</span>
<span id="L2189" rel="#L2189">2189</span>
<span id="L2190" rel="#L2190">2190</span>
<span id="L2191" rel="#L2191">2191</span>
<span id="L2192" rel="#L2192">2192</span>
<span id="L2193" rel="#L2193">2193</span>
<span id="L2194" rel="#L2194">2194</span>
<span id="L2195" rel="#L2195">2195</span>
<span id="L2196" rel="#L2196">2196</span>
<span id="L2197" rel="#L2197">2197</span>
<span id="L2198" rel="#L2198">2198</span>
<span id="L2199" rel="#L2199">2199</span>
<span id="L2200" rel="#L2200">2200</span>
<span id="L2201" rel="#L2201">2201</span>
<span id="L2202" rel="#L2202">2202</span>
<span id="L2203" rel="#L2203">2203</span>
<span id="L2204" rel="#L2204">2204</span>
<span id="L2205" rel="#L2205">2205</span>
<span id="L2206" rel="#L2206">2206</span>
<span id="L2207" rel="#L2207">2207</span>
<span id="L2208" rel="#L2208">2208</span>
<span id="L2209" rel="#L2209">2209</span>
<span id="L2210" rel="#L2210">2210</span>
<span id="L2211" rel="#L2211">2211</span>
<span id="L2212" rel="#L2212">2212</span>
<span id="L2213" rel="#L2213">2213</span>
<span id="L2214" rel="#L2214">2214</span>
<span id="L2215" rel="#L2215">2215</span>
<span id="L2216" rel="#L2216">2216</span>
<span id="L2217" rel="#L2217">2217</span>
<span id="L2218" rel="#L2218">2218</span>
<span id="L2219" rel="#L2219">2219</span>
<span id="L2220" rel="#L2220">2220</span>
<span id="L2221" rel="#L2221">2221</span>
<span id="L2222" rel="#L2222">2222</span>
<span id="L2223" rel="#L2223">2223</span>
<span id="L2224" rel="#L2224">2224</span>
<span id="L2225" rel="#L2225">2225</span>
<span id="L2226" rel="#L2226">2226</span>
<span id="L2227" rel="#L2227">2227</span>
<span id="L2228" rel="#L2228">2228</span>
<span id="L2229" rel="#L2229">2229</span>
<span id="L2230" rel="#L2230">2230</span>
<span id="L2231" rel="#L2231">2231</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/** Socket.IO 0.6.3 - Built with build.js */</span></div><div class='line' id='LC2'><span class="cm">/**</span></div><div class='line' id='LC3'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC4'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC5'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="cm">/**</span></div><div class='line' id='LC9'><span class="cm"> * @namespace</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;</div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC14'><span class="cm">   * Library version.</span></div><div class='line' id='LC15'><span class="cm">   */</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="nx">version</span><span class="o">:</span> <span class="s1">&#39;0.6.3&#39;</span><span class="p">,</span></div><div class='line' id='LC17'>&nbsp;&nbsp;</div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC19'><span class="cm">   * Updates the location of the WebSocketMain.swf file that is required for the Flashsocket transport.</span></div><div class='line' id='LC20'><span class="cm">   * This should only be needed if you want to load in the WebSocketMainInsecure.swf or if you want to</span></div><div class='line' id='LC21'><span class="cm">   * host the .swf file on a other server.</span></div><div class='line' id='LC22'><span class="cm">   *</span></div><div class='line' id='LC23'><span class="cm">   * @static</span></div><div class='line' id='LC24'><span class="cm">   * @deprecated Set the variable `WEB_SOCKET_SWF_LOCATION` pointing to WebSocketMain.swf</span></div><div class='line' id='LC25'><span class="cm">   * @param {String} path The path of the .swf file</span></div><div class='line' id='LC26'><span class="cm">   * @api public</span></div><div class='line' id='LC27'><span class="cm">   */</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="nx">setPath</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">path</span><span class="p">){</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">console</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;io.setPath will be removed. Please set the variable WEB_SOCKET_SWF_LOCATION pointing to WebSocketMain.swf&#39;</span><span class="p">);</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">path</span> <span class="o">=</span> <span class="sr">/\/$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="o">?</span> <span class="nx">path</span> <span class="o">:</span> <span class="nx">path</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span><span class="p">;</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WEB_SOCKET_SWF_LOCATION</span> <span class="o">=</span> <span class="nx">path</span> <span class="o">+</span> <span class="s1">&#39;lib/vendor/web-socket-js/WebSocketMain.swf&#39;</span><span class="p">;</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC33'><span class="p">};</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'><span class="cm">/**</span></div><div class='line' id='LC36'><span class="cm"> * Expose Socket.IO in jQuery</span></div><div class='line' id='LC37'><span class="cm"> */</span></div><div class='line' id='LC38'><span class="k">if</span> <span class="p">(</span><span class="s1">&#39;jQuery&#39;</span> <span class="k">in</span> <span class="k">this</span><span class="p">)</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">;</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'><span class="cm">/**</span></div><div class='line' id='LC41'><span class="cm"> * Default path to the .swf file.</span></div><div class='line' id='LC42'><span class="cm"> */</span></div><div class='line' id='LC43'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">){</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="c1">// WEB_SOCKET_SWF_LOCATION = (document.location.protocol == &#39;https:&#39; ? &#39;https:&#39; : &#39;http:&#39;) + &#39;//cdn.socket.io/&#39; + this.io.version + &#39;/WebSocketMain.swf&#39;;</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">WEB_SOCKET_SWF_LOCATION</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WEB_SOCKET_SWF_LOCATION</span> <span class="o">=</span> <span class="s1">&#39;/socket.io/lib/vendor/web-socket-js/WebSocketMain.swf&#39;</span><span class="p">;</span></div><div class='line' id='LC47'><span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'><span class="cm">/**</span></div><div class='line' id='LC50'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC51'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC52'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC53'><span class="cm"> */</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC57'>&nbsp;&nbsp;</div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC59'><span class="cm">   * Set when the `onload` event is executed on the page. This variable is used by</span></div><div class='line' id='LC60'><span class="cm">   * `io.util.load` to detect if we need to execute the function immediately or add</span></div><div class='line' id='LC61'><span class="cm">   * it to a onload listener.</span></div><div class='line' id='LC62'><span class="cm">   *</span></div><div class='line' id='LC63'><span class="cm">   * @type {Boolean}</span></div><div class='line' id='LC64'><span class="cm">   * @api private</span></div><div class='line' id='LC65'><span class="cm">   */</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="nx">pageLoaded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC67'>&nbsp;&nbsp;</div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC69'><span class="cm">   * @namespace</span></div><div class='line' id='LC70'><span class="cm">   */</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC73'><span class="cm">     * Executes the given function when the page is loaded.</span></div><div class='line' id='LC74'><span class="cm">     *</span></div><div class='line' id='LC75'><span class="cm">     * Example:</span></div><div class='line' id='LC76'><span class="cm">     *</span></div><div class='line' id='LC77'><span class="cm">     *     io.util.load(function(){ console.log(&#39;page loaded&#39;) });</span></div><div class='line' id='LC78'><span class="cm">     *</span></div><div class='line' id='LC79'><span class="cm">     * @param {Function} fn</span></div><div class='line' id='LC80'><span class="cm">     * @api public</span></div><div class='line' id='LC81'><span class="cm">     */</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">load</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">){</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="sr">/loaded|complete/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)</span> <span class="o">||</span> <span class="nx">pageLoaded</span><span class="p">)</span> <span class="k">return</span> <span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;attachEvent&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">){</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s1">&#39;onload&#39;</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC92'><span class="cm">     * Defers the function untill it&#39;s the function can be executed without</span></div><div class='line' id='LC93'><span class="cm">     * blocking the load process. This is especially needed for WebKit based</span></div><div class='line' id='LC94'><span class="cm">     * browsers. If a long running connection is made before the onload event</span></div><div class='line' id='LC95'><span class="cm">     * a loading indicator spinner will be present at all times untill a</span></div><div class='line' id='LC96'><span class="cm">     * reconnect has been made.</span></div><div class='line' id='LC97'><span class="cm">     *</span></div><div class='line' id='LC98'><span class="cm">     * @param {Function} fn</span></div><div class='line' id='LC99'><span class="cm">     * @api public</span></div><div class='line' id='LC100'><span class="cm">     */</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defer</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">){</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">webkit</span><span class="p">)</span> <span class="k">return</span> <span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span><span class="mi">100</span><span class="p">);</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC109'><span class="cm">     * Inherit the prototype methods from one constructor into another.</span></div><div class='line' id='LC110'><span class="cm">     *</span></div><div class='line' id='LC111'><span class="cm">     * Example:</span></div><div class='line' id='LC112'><span class="cm">     *</span></div><div class='line' id='LC113'><span class="cm">     *     function foo(){};</span></div><div class='line' id='LC114'><span class="cm">     *     foo.prototype.hello = function(){ console.log( this.words )};</span></div><div class='line' id='LC115'><span class="cm">     *     </span></div><div class='line' id='LC116'><span class="cm">     *     function bar(){</span></div><div class='line' id='LC117'><span class="cm">     *       this.words = &quot;Hello world&quot;;</span></div><div class='line' id='LC118'><span class="cm">     *     };</span></div><div class='line' id='LC119'><span class="cm">     *     </span></div><div class='line' id='LC120'><span class="cm">     *     io.util.inherit(bar,foo);</span></div><div class='line' id='LC121'><span class="cm">     *     var person = new bar();</span></div><div class='line' id='LC122'><span class="cm">     *     person.hello();</span></div><div class='line' id='LC123'><span class="cm">     *     // =&gt; &quot;Hello World&quot;</span></div><div class='line' id='LC124'><span class="cm">     *</span></div><div class='line' id='LC125'><span class="cm">     * @param {Constructor} ctor The constructor that needs to inherit the methods.</span></div><div class='line' id='LC126'><span class="cm">     * @param {Constructor} superCtor The constructor to inherit from.</span></div><div class='line' id='LC127'><span class="cm">     * @api public</span></div><div class='line' id='LC128'><span class="cm">     */</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inherit</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ctor</span><span class="p">,</span> <span class="nx">superCtor</span><span class="p">){</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// no support for `instanceof` for now</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">superCtor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">){</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">superCtor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC137'><span class="cm">     * Finds the index of item in a given Array.</span></div><div class='line' id='LC138'><span class="cm">     *</span></div><div class='line' id='LC139'><span class="cm">     * Example:</span></div><div class='line' id='LC140'><span class="cm">     *</span></div><div class='line' id='LC141'><span class="cm">     *     var data = [&#39;socket&#39;,2,3,4,&#39;socket&#39;,5,6,7,&#39;io&#39;];</span></div><div class='line' id='LC142'><span class="cm">     *     io.util.indexOf(data,&#39;socket&#39;,1);</span></div><div class='line' id='LC143'><span class="cm">     *     // =&gt; 4</span></div><div class='line' id='LC144'><span class="cm">     *</span></div><div class='line' id='LC145'><span class="cm">     * @param {Array} arr The array</span></div><div class='line' id='LC146'><span class="cm">     * @param item The item that we need to find</span></div><div class='line' id='LC147'><span class="cm">     * @param {Integer} from Starting point</span></div><div class='line' id='LC148'><span class="cm">     * @api public</span></div><div class='line' id='LC149'><span class="cm">     */</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">indexOf</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">arr</span><span class="p">,</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">from</span><span class="p">){</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="p">(</span><span class="nx">from</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">+</span> <span class="nx">from</span><span class="p">)</span> <span class="o">:</span> <span class="nx">from</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arr</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC158'><span class="cm">     * Checks if the given object is an Array.</span></div><div class='line' id='LC159'><span class="cm">     *</span></div><div class='line' id='LC160'><span class="cm">     * Example:</span></div><div class='line' id='LC161'><span class="cm">     *</span></div><div class='line' id='LC162'><span class="cm">     *     io.util.isArray([]);</span></div><div class='line' id='LC163'><span class="cm">     *     // =&gt; true</span></div><div class='line' id='LC164'><span class="cm">     *     io.util.isArray({});</span></div><div class='line' id='LC165'><span class="cm">     *    // =&gt; false</span></div><div class='line' id='LC166'><span class="cm">     *</span></div><div class='line' id='LC167'><span class="cm">     * @param obj</span></div><div class='line' id='LC168'><span class="cm">     * @api public</span></div><div class='line' id='LC169'><span class="cm">     */</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isArray</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">){</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">;</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC175'><span class="cm">     * Merges the properties of two objects.</span></div><div class='line' id='LC176'><span class="cm">     *</span></div><div class='line' id='LC177'><span class="cm">     * Example:</span></div><div class='line' id='LC178'><span class="cm">     *</span></div><div class='line' id='LC179'><span class="cm">     *     var a = {foo:&#39;bar&#39;}</span></div><div class='line' id='LC180'><span class="cm">     *       , b = {bar:&#39;baz&#39;};</span></div><div class='line' id='LC181'><span class="cm">     *     </span></div><div class='line' id='LC182'><span class="cm">     *     io.util.merge(a,b);</span></div><div class='line' id='LC183'><span class="cm">     *     // =&gt; {foo:&#39;bar&#39;,bar:&#39;baz&#39;}</span></div><div class='line' id='LC184'><span class="cm">     *</span></div><div class='line' id='LC185'><span class="cm">     * @param {Object} target The object that receives the keys</span></div><div class='line' id='LC186'><span class="cm">     * @param {Object} additional The object that supplies the keys</span></div><div class='line' id='LC187'><span class="cm">     * @api public</span></div><div class='line' id='LC188'><span class="cm">     */</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">merge</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">additional</span><span class="p">){</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">additional</span><span class="p">)</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">additional</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">i</span><span class="p">))</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">additional</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC195'>&nbsp;&nbsp;</div><div class='line' id='LC196'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC197'><span class="cm">   * Detect the Webkit platform based on the userAgent string.</span></div><div class='line' id='LC198'><span class="cm">   * This includes Mobile Webkit.</span></div><div class='line' id='LC199'><span class="cm">   *</span></div><div class='line' id='LC200'><span class="cm">   * @type {Boolean}</span></div><div class='line' id='LC201'><span class="cm">   * @api public</span></div><div class='line' id='LC202'><span class="cm">   */</span></div><div class='line' id='LC203'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">webkit</span> <span class="o">=</span> <span class="sr">/webkit/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">);</span></div><div class='line' id='LC204'>&nbsp;&nbsp;</div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pageLoaded</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC207'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'><span class="p">})();</span></div><div class='line' id='LC210'><span class="cm">/**</span></div><div class='line' id='LC211'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC212'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC213'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC214'><span class="cm"> */</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC217'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC218'>&nbsp;&nbsp;</div><div class='line' id='LC219'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC220'><span class="cm">   * Message frame for encoding and decoding responses from the Socket.IO server.</span></div><div class='line' id='LC221'><span class="cm">   *</span></div><div class='line' id='LC222'><span class="cm">   * @const</span></div><div class='line' id='LC223'><span class="cm">   * @type {String}</span></div><div class='line' id='LC224'><span class="cm">   */</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="nx">frame</span> <span class="o">=</span> <span class="s1">&#39;~m~&#39;</span><span class="p">,</span></div><div class='line' id='LC226'>&nbsp;&nbsp;</div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC228'><span class="cm">   * Transforms the message to a string. If the message is an {Object} we will convert it to</span></div><div class='line' id='LC229'><span class="cm">   * a string and prefix it with the `~j~` flag to indicate that message is JSON encoded.</span></div><div class='line' id='LC230'><span class="cm">   *</span></div><div class='line' id='LC231'><span class="cm">   * Example:</span></div><div class='line' id='LC232'><span class="cm">   *</span></div><div class='line' id='LC233'><span class="cm">   *     stringify({foo:&quot;bar&quot;});</span></div><div class='line' id='LC234'><span class="cm">   *     // =&gt; &quot;~j~{&quot;foo&quot;:&quot;bar&quot;}&quot;</span></div><div class='line' id='LC235'><span class="cm">   *</span></div><div class='line' id='LC236'><span class="cm">   * @param {String|Array|Object} message The messages that needs to be transformed to a string.</span></div><div class='line' id='LC237'><span class="cm">   * @throws {Error} When the JSON.stringify implementation is missing in the browser.</span></div><div class='line' id='LC238'><span class="cm">   * @returns {String} Message.</span></div><div class='line' id='LC239'><span class="cm">   * @api private</span></div><div class='line' id='LC240'><span class="cm">   */</span></div><div class='line' id='LC241'>&nbsp;&nbsp;<span class="nx">stringify</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">){</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">message</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Object]&#39;</span><span class="p">){</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;JSON&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)){</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span> <span class="o">=</span> <span class="s1">&#39;Socket.IO Error: Trying to encode as JSON, but JSON.stringify is missing.&#39;</span><span class="p">;</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;console&#39;</span> <span class="k">in</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">){</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;{ &quot;$error&quot;: &quot;&#39;</span><span class="o">+</span> <span class="nx">error</span> <span class="o">+</span><span class="s1">&#39;&quot; }&#39;</span><span class="p">;</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;~j~&#39;</span> <span class="o">+</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC256'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC257'>&nbsp;&nbsp;</div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC259'><span class="cm">   * This is the transport template for all supported transport methods. It provides the</span></div><div class='line' id='LC260'><span class="cm">   * basic functionality to create a working transport for Socket.IO.</span></div><div class='line' id='LC261'><span class="cm">   *</span></div><div class='line' id='LC262'><span class="cm">   * Options:</span></div><div class='line' id='LC263'><span class="cm">   *   - `timeout`  Transport shutdown timeout in milliseconds, based on the heartbeat interval.</span></div><div class='line' id='LC264'><span class="cm">   *</span></div><div class='line' id='LC265'><span class="cm">   * Example:</span></div><div class='line' id='LC266'><span class="cm">   *</span></div><div class='line' id='LC267'><span class="cm">   *     var transport = io.Transport.mytransport = function(){</span></div><div class='line' id='LC268'><span class="cm">   *       io.Transport.apply(this, arguments);</span></div><div class='line' id='LC269'><span class="cm">   *     };</span></div><div class='line' id='LC270'><span class="cm">   *     io.util.inherit(transport, io.Transport);</span></div><div class='line' id='LC271'><span class="cm">   *     </span></div><div class='line' id='LC272'><span class="cm">   *     ... // more code here</span></div><div class='line' id='LC273'><span class="cm">   *     </span></div><div class='line' id='LC274'><span class="cm">   *     // connect with your new transport</span></div><div class='line' id='LC275'><span class="cm">   *     var socket = new io.Socket(null,{transports:[&#39;mytransport&#39;]});</span></div><div class='line' id='LC276'><span class="cm">   *</span></div><div class='line' id='LC277'><span class="cm">   * @constructor</span></div><div class='line' id='LC278'><span class="cm">   * @param {Object} base The reference to io.Socket.</span></div><div class='line' id='LC279'><span class="cm">   * @param {Object} options The transport options.</span></div><div class='line' id='LC280'><span class="cm">   * @property {io.Socket|Object} base The reference to io.Socket.</span></div><div class='line' id='LC281'><span class="cm">   * @property {Object} options The transport options, these are used to overwrite the default options</span></div><div class='line' id='LC282'><span class="cm">   * @property {String} sessionid The sessionid of the established connection, this is only available a connection is established</span></div><div class='line' id='LC283'><span class="cm">   * @property {Boolean} connected The connection has been established.</span></div><div class='line' id='LC284'><span class="cm">   * @property {Boolean} connecting We are still connecting to the server.</span></div><div class='line' id='LC285'><span class="cm">   * @api public</span></div><div class='line' id='LC286'><span class="cm">   */</span></div><div class='line' id='LC287'>&nbsp;&nbsp;<span class="nx">Transport</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">base</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span> <span class="o">=</span> <span class="nx">base</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="mi">15000</span> <span class="c1">// based on heartbeat interval default</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">merge</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC296'><span class="cm">   * Send the message to the connected Socket.IO server.</span></div><div class='line' id='LC297'><span class="cm">   *</span></div><div class='line' id='LC298'><span class="cm">   * @throws {Error} When the io.Transport is inherited, it should override this method.</span></div><div class='line' id='LC299'><span class="cm">   * @api public</span></div><div class='line' id='LC300'><span class="cm">   */</span></div><div class='line' id='LC301'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Missing send() implementation&#39;</span><span class="p">);</span></div><div class='line' id='LC303'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC304'>&nbsp;&nbsp;</div><div class='line' id='LC305'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC306'><span class="cm">   * Establish a connection with the Socket.IO server..</span></div><div class='line' id='LC307'><span class="cm">   *</span></div><div class='line' id='LC308'><span class="cm">   * @throws {Error} When the io.Transport is inherited, it should override this method.</span></div><div class='line' id='LC309'><span class="cm">   * @api public</span></div><div class='line' id='LC310'><span class="cm">   */</span></div><div class='line' id='LC311'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Missing connect() implementation&#39;</span><span class="p">);</span></div><div class='line' id='LC313'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC316'><span class="cm">   * Disconnect the established connection.</span></div><div class='line' id='LC317'><span class="cm">   *</span></div><div class='line' id='LC318'><span class="cm">   * @throws {Error} When the io.Transport is inherited, it should override this method.</span></div><div class='line' id='LC319'><span class="cm">   * @api private</span></div><div class='line' id='LC320'><span class="cm">   */</span></div><div class='line' id='LC321'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Missing disconnect() implementation&#39;</span><span class="p">);</span></div><div class='line' id='LC323'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC324'>&nbsp;&nbsp;</div><div class='line' id='LC325'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC326'><span class="cm">   * Encode the message by adding the `frame` to each message. This allows</span></div><div class='line' id='LC327'><span class="cm">   * the client so send multiple messages with only one request.</span></div><div class='line' id='LC328'><span class="cm">   *</span></div><div class='line' id='LC329'><span class="cm">   * @param {String|Array} messages Messages that need to be encoded.</span></div><div class='line' id='LC330'><span class="cm">   * @returns {String} Encoded message.</span></div><div class='line' id='LC331'><span class="cm">   * @api private</span></div><div class='line' id='LC332'><span class="cm">   */</span></div><div class='line' id='LC333'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">encode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">messages</span><span class="p">){</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">messages</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">messages</span><span class="p">)</span> <span class="o">?</span> <span class="nx">messages</span> <span class="o">:</span> <span class="p">[</span><span class="nx">messages</span><span class="p">];</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">messages</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span> <span class="o">=</span> <span class="nx">messages</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">messages</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">stringify</span><span class="p">(</span><span class="nx">messages</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ret</span> <span class="o">+=</span> <span class="nx">frame</span> <span class="o">+</span> <span class="nx">message</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="nx">frame</span> <span class="o">+</span> <span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC341'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC342'>&nbsp;&nbsp;</div><div class='line' id='LC343'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC344'><span class="cm">   * Decoded the response from the Socket.IO server, as the server could send multiple</span></div><div class='line' id='LC345'><span class="cm">   * messages in one response.</span></div><div class='line' id='LC346'><span class="cm">   *</span></div><div class='line' id='LC347'><span class="cm">   * @param (String} data The response from the server that requires decoding</span></div><div class='line' id='LC348'><span class="cm">   * @returns {Array} Decoded messages.</span></div><div class='line' id='LC349'><span class="cm">   * @api private</span></div><div class='line' id='LC350'><span class="cm">   */</span></div><div class='line' id='LC351'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">decode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">messages</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">number</span><span class="p">,</span> <span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">do</span> <span class="p">{</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">!==</span> <span class="nx">frame</span><span class="p">)</span> <span class="k">return</span> <span class="nx">messages</span><span class="p">;</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">number</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">n</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="nx">n</span><span class="p">){</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">number</span> <span class="o">+=</span> <span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">number</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="nx">frame</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">number</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">number</span><span class="p">);</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">messages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">number</span><span class="p">));</span> <span class="c1">// here</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">number</span><span class="p">);</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">while</span><span class="p">(</span><span class="nx">data</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">messages</span><span class="p">;</span></div><div class='line' id='LC371'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC372'>&nbsp;&nbsp;</div><div class='line' id='LC373'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC374'><span class="cm">   * Handles the response from the server. When a new response is received</span></div><div class='line' id='LC375'><span class="cm">   * it will automatically update the timeout, decode the message and</span></div><div class='line' id='LC376'><span class="cm">   * forwards the response to the onMessage function for further processing.</span></div><div class='line' id='LC377'><span class="cm">   *</span></div><div class='line' id='LC378'><span class="cm">   * @param {String} data Response from the server.</span></div><div class='line' id='LC379'><span class="cm">   * @api private</span></div><div class='line' id='LC380'><span class="cm">   */</span></div><div class='line' id='LC381'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onData</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">();</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">msgs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">decode</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">msgs</span> <span class="o">&amp;&amp;</span> <span class="nx">msgs</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">msgs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onMessage</span><span class="p">(</span><span class="nx">msgs</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC389'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC390'>&nbsp;&nbsp;</div><div class='line' id='LC391'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC392'><span class="cm">   * All the transports have a dedicated timeout to detect if</span></div><div class='line' id='LC393'><span class="cm">   * the connection is still alive. We clear the existing timer</span></div><div class='line' id='LC394'><span class="cm">   * and set new one each time this function is called. When the</span></div><div class='line' id='LC395'><span class="cm">   * timeout does occur it will call the `onTimeout` method.</span></div><div class='line' id='LC396'><span class="cm">   *</span></div><div class='line' id='LC397'><span class="cm">   * @api private</span></div><div class='line' id='LC398'><span class="cm">   */</span></div><div class='line' id='LC399'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setTimeout</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timeout</span><span class="p">)</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">onTimeout</span><span class="p">();</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC405'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC406'>&nbsp;&nbsp;</div><div class='line' id='LC407'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC408'><span class="cm">   * Disconnect from the Socket.IO server when a timeout occurs.</span></div><div class='line' id='LC409'><span class="cm">   * </span></div><div class='line' id='LC410'><span class="cm">   * @api private</span></div><div class='line' id='LC411'><span class="cm">   */</span></div><div class='line' id='LC412'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onTimeout</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">();</span></div><div class='line' id='LC414'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC415'>&nbsp;&nbsp;</div><div class='line' id='LC416'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC417'><span class="cm">   * After the response from the server has been parsed to individual</span></div><div class='line' id='LC418'><span class="cm">   * messages we need to decode them using the the Socket.IO message</span></div><div class='line' id='LC419'><span class="cm">   * protocol: &lt;https://github.com/learnboost/socket.io-node/&gt;.</span></div><div class='line' id='LC420'><span class="cm">   *</span></div><div class='line' id='LC421'><span class="cm">   * When a message is received we check if a session id has been set,</span></div><div class='line' id='LC422'><span class="cm">   * if the session id is missing we can assume that the received message</span></div><div class='line' id='LC423'><span class="cm">   * contains the sessionid of the connection.</span></div><div class='line' id='LC424'><span class="cm">   </span></div><div class='line' id='LC425'><span class="cm">   * When a message is prefixed with `~h~` we dispatch it our heartbeat</span></div><div class='line' id='LC426'><span class="cm">   * processing method `onHeartbeat` with the content of the heartbeat.</span></div><div class='line' id='LC427'><span class="cm">   *</span></div><div class='line' id='LC428'><span class="cm">   * When the message is prefixed with `~j~` we can assume that the contents</span></div><div class='line' id='LC429'><span class="cm">   * of the message is JSON encoded, so we parse the message and notify</span></div><div class='line' id='LC430'><span class="cm">   * the base of the new message.</span></div><div class='line' id='LC431'><span class="cm">   *</span></div><div class='line' id='LC432'><span class="cm">   * If none of the above, we consider it just a plain text message and</span></div><div class='line' id='LC433'><span class="cm">   * notify the base of the new message.</span></div><div class='line' id='LC434'><span class="cm">   *</span></div><div class='line' id='LC435'><span class="cm">   * @param {String} message A decoded message from the server.</span></div><div class='line' id='LC436'><span class="cm">   * @api private</span></div><div class='line' id='LC437'><span class="cm">   */</span></div><div class='line' id='LC438'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onMessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">){</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">sessionid</span><span class="p">){</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sessionid</span> <span class="o">=</span> <span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onConnect</span><span class="p">();</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;~h~&#39;</span><span class="p">){</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onHeartbeat</span><span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">3</span><span class="p">));</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;~j~&#39;</span><span class="p">){</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">onMessage</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">3</span><span class="p">)));</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">onMessage</span><span class="p">(</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC449'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC450'>&nbsp;&nbsp;</div><div class='line' id='LC451'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC452'><span class="cm">   * Send the received heartbeat message back to server. So the server</span></div><div class='line' id='LC453'><span class="cm">   * knows we are still connected.</span></div><div class='line' id='LC454'><span class="cm">   *</span></div><div class='line' id='LC455'><span class="cm">   * @param {String} heartbeat Heartbeat response from the server.</span></div><div class='line' id='LC456'><span class="cm">   * @api private</span></div><div class='line' id='LC457'><span class="cm">   */</span></div><div class='line' id='LC458'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onHeartbeat</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">heartbeat</span><span class="p">){</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">&#39;~h~&#39;</span> <span class="o">+</span> <span class="nx">heartbeat</span><span class="p">);</span> <span class="c1">// echo</span></div><div class='line' id='LC460'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC461'>&nbsp;&nbsp;</div><div class='line' id='LC462'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC463'><span class="cm">   * Notifies the base when a connection to the Socket.IO server has</span></div><div class='line' id='LC464'><span class="cm">   * been established. And it starts the connection `timeout` timer.</span></div><div class='line' id='LC465'><span class="cm">   *</span></div><div class='line' id='LC466'><span class="cm">   * @api private</span></div><div class='line' id='LC467'><span class="cm">   */</span></div><div class='line' id='LC468'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onConnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connected</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connecting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">onConnect</span><span class="p">();</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">();</span></div><div class='line' id='LC473'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC474'>&nbsp;&nbsp;</div><div class='line' id='LC475'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC476'><span class="cm">   * Notifies the base when the connection with the Socket.IO server</span></div><div class='line' id='LC477'><span class="cm">   * has been disconnected.</span></div><div class='line' id='LC478'><span class="cm">   *</span></div><div class='line' id='LC479'><span class="cm">   * @api private</span></div><div class='line' id='LC480'><span class="cm">   */</span></div><div class='line' id='LC481'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onDisconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connecting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connected</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sessionid</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">();</span></div><div class='line' id='LC486'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC487'>&nbsp;&nbsp;</div><div class='line' id='LC488'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC489'><span class="cm">   * Generates a connection url based on the Socket.IO URL Protocol.</span></div><div class='line' id='LC490'><span class="cm">   * See &lt;https://github.com/learnboost/socket.io-node/&gt; for more details.</span></div><div class='line' id='LC491'><span class="cm">   *</span></div><div class='line' id='LC492'><span class="cm">   * @returns {String} Connection url</span></div><div class='line' id='LC493'><span class="cm">   * @api private</span></div><div class='line' id='LC494'><span class="cm">   */</span></div><div class='line' id='LC495'>&nbsp;&nbsp;<span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">prepareUrl</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">secure</span> <span class="o">?</span> <span class="s1">&#39;https&#39;</span> <span class="o">:</span> <span class="s1">&#39;http&#39;</span><span class="p">)</span> </div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;://&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">host</span> </div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">port</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resource</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">type</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">sessionid</span> <span class="o">?</span> <span class="p">(</span><span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">sessionid</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC502'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'><span class="p">})();</span></div><div class='line' id='LC505'><span class="cm">/**</span></div><div class='line' id='LC506'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC507'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC508'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC509'><span class="cm"> */</span></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC512'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC513'>&nbsp;&nbsp;</div><div class='line' id='LC514'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC515'><span class="cm">   * A small stub function that will be used to reduce memory leaks.</span></div><div class='line' id='LC516'><span class="cm">   *</span></div><div class='line' id='LC517'><span class="cm">   * @type {Function}</span></div><div class='line' id='LC518'><span class="cm">   * @api private</span></div><div class='line' id='LC519'><span class="cm">   */</span></div><div class='line' id='LC520'>&nbsp;&nbsp;<span class="nx">empty</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Function</span><span class="p">,</span></div><div class='line' id='LC521'>&nbsp;&nbsp;</div><div class='line' id='LC522'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC523'><span class="cm">   * We preform a small feature detection to see if `Cross Origin Resource Sharing`</span></div><div class='line' id='LC524'><span class="cm">   * is supported in the `XMLHttpRequest` object, so we can use it for cross domain requests.</span></div><div class='line' id='LC525'><span class="cm">   *</span></div><div class='line' id='LC526'><span class="cm">   * @type {Boolean}</span></div><div class='line' id='LC527'><span class="cm">   * @api private</span></div><div class='line' id='LC528'><span class="cm">   */</span> </div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="nx">XMLHttpRequestCORS</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;XMLHttpRequest&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// CORS feature detection</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">withCredentials</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC534'>&nbsp;&nbsp;<span class="p">})(),</span></div><div class='line' id='LC535'>&nbsp;&nbsp;</div><div class='line' id='LC536'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC537'><span class="cm">   * Generates the correct `XMLHttpRequest` for regular and cross domain requests.</span></div><div class='line' id='LC538'><span class="cm">   *</span></div><div class='line' id='LC539'><span class="cm">   * @param {Boolean} [xdomain] Create a request that can be used cross domain.</span></div><div class='line' id='LC540'><span class="cm">   * @returns {XMLHttpRequest|false} If we can create a XMLHttpRequest we will return that.</span></div><div class='line' id='LC541'><span class="cm">   * @api private</span></div><div class='line' id='LC542'><span class="cm">   */</span></div><div class='line' id='LC543'>&nbsp;&nbsp;<span class="nx">request</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xdomain</span><span class="p">){</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;XDomainRequest&#39;</span> <span class="k">in</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="nx">xdomain</span><span class="p">)</span> <span class="k">return</span> <span class="k">new</span> <span class="nx">XDomainRequest</span><span class="p">();</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;XMLHttpRequest&#39;</span> <span class="k">in</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">xdomain</span> <span class="o">||</span> <span class="nx">XMLHttpRequestCORS</span><span class="p">))</span> <span class="k">return</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">xdomain</span><span class="p">){</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;MSXML2.XMLHTTP&#39;</span><span class="p">);</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span><span class="p">;</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;Microsoft.XMLHTTP&#39;</span><span class="p">);</span></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC558'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC559'>&nbsp;&nbsp;</div><div class='line' id='LC560'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC561'><span class="cm">   * This is the base for XHR based transports, the `XHR-Polling` and the `XHR-multipart` </span></div><div class='line' id='LC562'><span class="cm">   * transports will extend this class.</span></div><div class='line' id='LC563'><span class="cm">   *</span></div><div class='line' id='LC564'><span class="cm">   * @constructor</span></div><div class='line' id='LC565'><span class="cm">   * @extends {io.Transport}</span></div><div class='line' id='LC566'><span class="cm">   * @property {Array} sendBuffer Used to queue up messages so they can be send as one request.</span></div><div class='line' id='LC567'><span class="cm">   * @api public</span></div><div class='line' id='LC568'><span class="cm">   */</span></div><div class='line' id='LC569'>&nbsp;&nbsp;<span class="nx">XHR</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC572'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC573'>&nbsp;&nbsp;</div><div class='line' id='LC574'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">inherit</span><span class="p">(</span><span class="nx">XHR</span><span class="p">,</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">);</span></div><div class='line' id='LC575'>&nbsp;&nbsp;</div><div class='line' id='LC576'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC577'><span class="cm">   * Establish a connection</span></div><div class='line' id='LC578'><span class="cm">   *</span></div><div class='line' id='LC579'><span class="cm">   * @returns {Transport}</span></div><div class='line' id='LC580'><span class="cm">   * @api public</span></div><div class='line' id='LC581'><span class="cm">   */</span></div><div class='line' id='LC582'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">();</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC585'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC586'>&nbsp;&nbsp;</div><div class='line' id='LC587'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC588'><span class="cm">   * Check if we need to send data to the Socket.IO server, if we have data in our buffer</span></div><div class='line' id='LC589'><span class="cm">   * we encode it and forward it to the sendIORequest method.</span></div><div class='line' id='LC590'><span class="cm">   *</span></div><div class='line' id='LC591'><span class="cm">   * @api private</span></div><div class='line' id='LC592'><span class="cm">   */</span></div><div class='line' id='LC593'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">checkSend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">posting</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">encoded</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">encode</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span><span class="p">);</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendIORequest</span><span class="p">(</span><span class="nx">encoded</span><span class="p">);</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC599'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC600'>&nbsp;&nbsp;</div><div class='line' id='LC601'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC602'><span class="cm">   * Send data to the Socket.IO server.</span></div><div class='line' id='LC603'><span class="cm">   *</span></div><div class='line' id='LC604'><span class="cm">   * @param data The message</span></div><div class='line' id='LC605'><span class="cm">   * @returns {Transport}</span></div><div class='line' id='LC606'><span class="cm">   * @api public</span></div><div class='line' id='LC607'><span class="cm">   */</span></div><div class='line' id='LC608'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)){</span></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">checkSend</span><span class="p">();</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC616'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC617'>&nbsp;&nbsp;</div><div class='line' id='LC618'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC619'><span class="cm">   * Posts a encoded message to the Socket.IO server.</span></div><div class='line' id='LC620'><span class="cm">   *</span></div><div class='line' id='LC621'><span class="cm">   * @param {String} data A encoded message.</span></div><div class='line' id='LC622'><span class="cm">   * @api private</span></div><div class='line' id='LC623'><span class="cm">   */</span></div><div class='line' id='LC624'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sendIORequest</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">posting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendXHR</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">request</span><span class="p">(</span><span class="s1">&#39;send&#39;</span><span class="p">,</span> <span class="s1">&#39;POST&#39;</span><span class="p">);</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">status</span><span class="p">;</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span><span class="p">){</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nx">empty</span><span class="p">;</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span> <span class="nx">status</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">.</span><span class="nx">status</span><span class="p">;</span> <span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">posting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">){</span></div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">checkSend</span><span class="p">();</span></div><div class='line' id='LC636'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">();</span></div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">&#39;data=&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC642'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC643'>&nbsp;&nbsp;</div><div class='line' id='LC644'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC645'><span class="cm">   * Disconnect the established connection.</span></div><div class='line' id='LC646'><span class="cm">   *</span></div><div class='line' id='LC647'><span class="cm">   * @returns {Transport}.</span></div><div class='line' id='LC648'><span class="cm">   * @api public</span></div><div class='line' id='LC649'><span class="cm">   */</span></div><div class='line' id='LC650'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// send disconnection signal</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">();</span></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC654'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC655'>&nbsp;&nbsp;</div><div class='line' id='LC656'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC657'><span class="cm">   * Handle the disconnect request.</span></div><div class='line' id='LC658'><span class="cm">   *</span></div><div class='line' id='LC659'><span class="cm">   * @api private</span></div><div class='line' id='LC660'><span class="cm">   */</span></div><div class='line' id='LC661'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onDisconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">){</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nx">empty</span><span class="p">;</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC668'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">){</span></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nx">empty</span><span class="p">;</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendXHR</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendXHR</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sendBuffer</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC677'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC678'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC679'>&nbsp;&nbsp;</div><div class='line' id='LC680'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC681'><span class="cm">   * Generates a configured XHR request</span></div><div class='line' id='LC682'><span class="cm">   *</span></div><div class='line' id='LC683'><span class="cm">   * @param {String} url The url that needs to be requested.</span></div><div class='line' id='LC684'><span class="cm">   * @param {String} method The method the request should use.</span></div><div class='line' id='LC685'><span class="cm">   * @param {Boolean} multipart Do a multipart XHR request</span></div><div class='line' id='LC686'><span class="cm">   * @returns {XMLHttpRequest}</span></div><div class='line' id='LC687'><span class="cm">   * @api private</span></div><div class='line' id='LC688'><span class="cm">   */</span></div><div class='line' id='LC689'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">multipart</span><span class="p">){</span></div><div class='line' id='LC690'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">req</span> <span class="o">=</span> <span class="nx">request</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">isXDomain</span><span class="p">());</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">multipart</span><span class="p">)</span> <span class="nx">req</span><span class="p">.</span><span class="nx">multipart</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">method</span> <span class="o">||</span> <span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepareUrl</span><span class="p">()</span> <span class="o">+</span> <span class="p">(</span><span class="nx">url</span> <span class="o">?</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">));</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">method</span> <span class="o">==</span> <span class="s1">&#39;POST&#39;</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;setRequestHeader&#39;</span> <span class="k">in</span> <span class="nx">req</span><span class="p">){</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;Content-type&#39;</span><span class="p">,</span> <span class="s1">&#39;application/x-www-form-urlencoded; charset=utf-8&#39;</span><span class="p">);</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">req</span><span class="p">;</span></div><div class='line' id='LC697'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC698'>&nbsp;&nbsp;</div><div class='line' id='LC699'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC700'><span class="cm">   * Check if the XHR transports are supported</span></div><div class='line' id='LC701'><span class="cm">   *</span></div><div class='line' id='LC702'><span class="cm">   * @param {Boolean} xdomain Check if we support cross domain requests.</span></div><div class='line' id='LC703'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC704'><span class="cm">   * @api public</span></div><div class='line' id='LC705'><span class="cm">   */</span></div><div class='line' id='LC706'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">check</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xdomain</span><span class="p">){</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">request</span><span class="p">(</span><span class="nx">xdomain</span><span class="p">))</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC710'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC711'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC712'>&nbsp;&nbsp;</div><div class='line' id='LC713'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC714'><span class="cm">   * Check if the XHR transport supports corss domain requests.</span></div><div class='line' id='LC715'><span class="cm">   * </span></div><div class='line' id='LC716'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC717'><span class="cm">   * @api public</span></div><div class='line' id='LC718'><span class="cm">   */</span></div><div class='line' id='LC719'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">xdomainCheck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">XHR</span><span class="p">.</span><span class="nx">check</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC721'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC722'>&nbsp;&nbsp;</div><div class='line' id='LC723'>&nbsp;&nbsp;<span class="nx">XHR</span><span class="p">.</span><span class="nx">request</span> <span class="o">=</span> <span class="nx">request</span><span class="p">;</span></div><div class='line' id='LC724'>&nbsp;&nbsp;</div><div class='line' id='LC725'><span class="p">})();</span></div><div class='line' id='LC726'><br/></div><div class='line' id='LC727'><span class="cm">/**</span></div><div class='line' id='LC728'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC729'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC730'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC731'><span class="cm"> */</span></div><div class='line' id='LC732'><br/></div><div class='line' id='LC733'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC734'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC735'>&nbsp;&nbsp;</div><div class='line' id='LC736'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC737'><span class="cm">   * The WebSocket transport uses the HTML5 WebSocket API to establish an persistent</span></div><div class='line' id='LC738'><span class="cm">   * connection with the Socket.IO server. This transport will also be inherited by the</span></div><div class='line' id='LC739'><span class="cm">   * FlashSocket fallback as it provides a API compatible polyfill for the WebSockets.</span></div><div class='line' id='LC740'><span class="cm">   *</span></div><div class='line' id='LC741'><span class="cm">   * @constructor</span></div><div class='line' id='LC742'><span class="cm">   * @extends {io.Transport}</span></div><div class='line' id='LC743'><span class="cm">   * @api public</span></div><div class='line' id='LC744'><span class="cm">   */</span></div><div class='line' id='LC745'>&nbsp;&nbsp;<span class="nx">WS</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">websocket</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC747'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC748'>&nbsp;&nbsp;</div><div class='line' id='LC749'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">inherit</span><span class="p">(</span><span class="nx">WS</span><span class="p">,</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">);</span></div><div class='line' id='LC750'>&nbsp;&nbsp;</div><div class='line' id='LC751'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC752'><span class="cm">   * The transport type, you use this to identify which transport was chosen.</span></div><div class='line' id='LC753'><span class="cm">   *</span></div><div class='line' id='LC754'><span class="cm">   * @type {String}</span></div><div class='line' id='LC755'><span class="cm">   * @api public</span></div><div class='line' id='LC756'><span class="cm">   */</span></div><div class='line' id='LC757'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;websocket&#39;</span><span class="p">;</span></div><div class='line' id='LC758'>&nbsp;&nbsp;</div><div class='line' id='LC759'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC760'><span class="cm">   * Initializes a new `WebSocket` connection with the Socket.IO server. We attach</span></div><div class='line' id='LC761'><span class="cm">   * all the appropriate listeners to handle the responses from the server.</span></div><div class='line' id='LC762'><span class="cm">   *</span></div><div class='line' id='LC763'><span class="cm">   * @returns {Transport}</span></div><div class='line' id='LC764'><span class="cm">   * @api public</span></div><div class='line' id='LC765'><span class="cm">   */</span></div><div class='line' id='LC766'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">socket</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">WebSocket</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prepareUrl</span><span class="p">());</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">socket</span><span class="p">.</span><span class="nx">onmessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ev</span><span class="p">){</span> <span class="nx">self</span><span class="p">.</span><span class="nx">onData</span><span class="p">(</span><span class="nx">ev</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">socket</span><span class="p">.</span><span class="nx">onclose</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ev</span><span class="p">){</span> <span class="nx">self</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">();</span> <span class="p">};</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">socket</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span> <span class="nx">self</span><span class="p">.</span><span class="nx">onError</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC773'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC774'>&nbsp;&nbsp;</div><div class='line' id='LC775'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC776'><span class="cm">   * Send a message to the Socket.IO server. The message will automatically be encoded</span></div><div class='line' id='LC777'><span class="cm">   * in the correct message format.</span></div><div class='line' id='LC778'><span class="cm">   *</span></div><div class='line' id='LC779'><span class="cm">   * @returns {Transport}</span></div><div class='line' id='LC780'><span class="cm">   * @api public</span></div><div class='line' id='LC781'><span class="cm">   */</span></div><div class='line' id='LC782'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">socket</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">socket</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">encode</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC785'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC786'>&nbsp;&nbsp;</div><div class='line' id='LC787'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC788'><span class="cm">   * Disconnect the established `WebSocket` connection.</span></div><div class='line' id='LC789'><span class="cm">   *</span></div><div class='line' id='LC790'><span class="cm">   * @returns {Transport}</span></div><div class='line' id='LC791'><span class="cm">   * @api public</span></div><div class='line' id='LC792'><span class="cm">   */</span></div><div class='line' id='LC793'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">socket</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">socket</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC796'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC797'>&nbsp;&nbsp;</div><div class='line' id='LC798'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC799'><span class="cm">   * Handle the errors that `WebSocket` might be giving when we</span></div><div class='line' id='LC800'><span class="cm">   * are attempting to connect or send messages.</span></div><div class='line' id='LC801'><span class="cm">   *</span></div><div class='line' id='LC802'><span class="cm">   * @param {Error} e The error.</span></div><div class='line' id='LC803'><span class="cm">   * @api private</span></div><div class='line' id='LC804'><span class="cm">   */</span></div><div class='line' id='LC805'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onError</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC806'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">e</span><span class="p">]);</span></div><div class='line' id='LC807'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC808'>&nbsp;&nbsp;</div><div class='line' id='LC809'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC810'><span class="cm">   * Generate a `WebSocket` compatible URL based on the options</span></div><div class='line' id='LC811'><span class="cm">   * the user supplied in our Socket.IO base.</span></div><div class='line' id='LC812'><span class="cm">   *</span></div><div class='line' id='LC813'><span class="cm">   * @returns {String} Connection url</span></div><div class='line' id='LC814'><span class="cm">   * @api private</span></div><div class='line' id='LC815'><span class="cm">   */</span></div><div class='line' id='LC816'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">prepareUrl</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">secure</span> <span class="o">?</span> <span class="s1">&#39;wss&#39;</span> <span class="o">:</span> <span class="s1">&#39;ws&#39;</span><span class="p">)</span> </div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;://&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">host</span> </div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">port</span></div><div class='line' id='LC820'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">base</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">resource</span></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">type</span></div><div class='line' id='LC822'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">sessionid</span> <span class="o">?</span> <span class="p">(</span><span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">sessionid</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC823'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC824'>&nbsp;&nbsp;</div><div class='line' id='LC825'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC826'><span class="cm">   * Checks if the browser has support for native `WebSockets` and that</span></div><div class='line' id='LC827'><span class="cm">   * it&#39;s not the polyfill created for the FlashSocket transport.</span></div><div class='line' id='LC828'><span class="cm">   *</span></div><div class='line' id='LC829'><span class="cm">   * @return {Boolean}</span></div><div class='line' id='LC830'><span class="cm">   * @api public</span></div><div class='line' id='LC831'><span class="cm">   */</span></div><div class='line' id='LC832'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">check</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// we make sure WebSocket is not confounded with a previously loaded flash WebSocket</span></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;WebSocket&#39;</span> <span class="k">in</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">&amp;&amp;</span> <span class="o">!!</span><span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">match</span><span class="p">(</span><span class="sr">/native/i</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">WebSocket</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">;</span></div><div class='line' id='LC835'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC836'>&nbsp;&nbsp;</div><div class='line' id='LC837'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC838'><span class="cm">   * Check if the `WebSocket` transport support cross domain communications.</span></div><div class='line' id='LC839'><span class="cm">   *</span></div><div class='line' id='LC840'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC841'><span class="cm">   * @api public</span></div><div class='line' id='LC842'><span class="cm">   */</span></div><div class='line' id='LC843'>&nbsp;&nbsp;<span class="nx">WS</span><span class="p">.</span><span class="nx">xdomainCheck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC845'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC846'>&nbsp;&nbsp;</div><div class='line' id='LC847'><span class="p">})();</span></div><div class='line' id='LC848'><br/></div><div class='line' id='LC849'><span class="cm">/**</span></div><div class='line' id='LC850'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC851'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC852'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC853'><span class="cm"> */</span></div><div class='line' id='LC854'><br/></div><div class='line' id='LC855'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC856'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC857'>&nbsp;&nbsp;</div><div class='line' id='LC858'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC859'><span class="cm">   * The Flashsocket transport. This is a API wrapper for the HTML5 WebSocket specification.</span></div><div class='line' id='LC860'><span class="cm">   * It uses a .swf file to communicate with the server. If you want to serve the .swf file</span></div><div class='line' id='LC861'><span class="cm">   * from a other server than where the Socket.IO script is coming from you need to use the</span></div><div class='line' id='LC862'><span class="cm">   * insecure version of the .swf. More information about this can be found on the github page.</span></div><div class='line' id='LC863'><span class="cm">   *</span></div><div class='line' id='LC864'><span class="cm">   * @constructor</span></div><div class='line' id='LC865'><span class="cm">   * @extends {io.Transport.websocket}</span></div><div class='line' id='LC866'><span class="cm">   * @api public</span></div><div class='line' id='LC867'><span class="cm">   */</span></div><div class='line' id='LC868'>&nbsp;&nbsp;<span class="nx">Flashsocket</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">flashsocket</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">websocket</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC870'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC871'>&nbsp;&nbsp;</div><div class='line' id='LC872'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">inherit</span><span class="p">(</span><span class="nx">Flashsocket</span><span class="p">,</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">websocket</span><span class="p">);</span></div><div class='line' id='LC873'>&nbsp;&nbsp;</div><div class='line' id='LC874'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC875'><span class="cm">   * The transport type, you use this to identify which transport was chosen.</span></div><div class='line' id='LC876'><span class="cm">   *</span></div><div class='line' id='LC877'><span class="cm">   * @type {String}</span></div><div class='line' id='LC878'><span class="cm">   * @api public</span></div><div class='line' id='LC879'><span class="cm">   */</span></div><div class='line' id='LC880'>&nbsp;&nbsp;<span class="nx">Flashsocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;flashsocket&#39;</span><span class="p">;</span></div><div class='line' id='LC881'>&nbsp;&nbsp;</div><div class='line' id='LC882'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC883'><span class="cm">   * Disconnect the established `Flashsocket` connection. This is done by adding a new</span></div><div class='line' id='LC884'><span class="cm">   * task to the Flashsocket. The rest will be handled off by the `WebSocket` transport.</span></div><div class='line' id='LC885'><span class="cm">   *</span></div><div class='line' id='LC886'><span class="cm">   * @returns {Transport}</span></div><div class='line' id='LC887'><span class="cm">   * @api public</span></div><div class='line' id='LC888'><span class="cm">   */</span></div><div class='line' id='LC889'>&nbsp;&nbsp;<span class="nx">Flashsocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__addTask</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">websocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC895'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC896'>&nbsp;&nbsp;</div><div class='line' id='LC897'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC898'><span class="cm">   * Sends a message to the Socket.IO server. This is done by adding a new</span></div><div class='line' id='LC899'><span class="cm">   * task to the Flashsocket. The rest will be handled off by the `WebSocket` transport.</span></div><div class='line' id='LC900'><span class="cm">   *</span></div><div class='line' id='LC901'><span class="cm">   * @returns {Transport}</span></div><div class='line' id='LC902'><span class="cm">   * @api public</span></div><div class='line' id='LC903'><span class="cm">   */</span></div><div class='line' id='LC904'>&nbsp;&nbsp;<span class="nx">Flashsocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__addTask</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">websocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC908'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC910'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC911'>&nbsp;&nbsp;</div><div class='line' id='LC912'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC913'><span class="cm">   * Check if the Flashsocket transport is supported as it requires that the Adobe Flash Player</span></div><div class='line' id='LC914'><span class="cm">   * plugin version `10.0.0` or greater is installed. And also check if the polyfill is correctly</span></div><div class='line' id='LC915'><span class="cm">   * loaded.</span></div><div class='line' id='LC916'><span class="cm">   *</span></div><div class='line' id='LC917'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC918'><span class="cm">   * @api public</span></div><div class='line' id='LC919'><span class="cm">   */</span></div><div class='line' id='LC920'>&nbsp;&nbsp;<span class="nx">Flashsocket</span><span class="p">.</span><span class="nx">check</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">WebSocket</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">||</span> <span class="o">!</span><span class="p">(</span><span class="s1">&#39;__addTask&#39;</span> <span class="k">in</span> <span class="nx">WebSocket</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span><span class="nx">swfobject</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC922'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">swfobject</span><span class="p">.</span><span class="nx">hasFlashPlayerVersion</span><span class="p">(</span><span class="s2">&quot;10.0.0&quot;</span><span class="p">);</span></div><div class='line' id='LC923'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC924'>&nbsp;&nbsp;</div><div class='line' id='LC925'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC926'><span class="cm">   * Check if the Flashsocket transport can be used as cross domain / cross origin transport.</span></div><div class='line' id='LC927'><span class="cm">   * Because we can&#39;t see which type (secure or insecure) of .swf is used we will just return true.</span></div><div class='line' id='LC928'><span class="cm">   *</span></div><div class='line' id='LC929'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC930'><span class="cm">   * @api public</span></div><div class='line' id='LC931'><span class="cm">   */</span></div><div class='line' id='LC932'>&nbsp;&nbsp;<span class="nx">Flashsocket</span><span class="p">.</span><span class="nx">xdomainCheck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC934'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC935'>&nbsp;&nbsp;</div><div class='line' id='LC936'><span class="p">})();</span></div><div class='line' id='LC937'><span class="cm">/**</span></div><div class='line' id='LC938'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC939'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC940'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC941'><span class="cm"> */</span></div><div class='line' id='LC942'><br/></div><div class='line' id='LC943'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC944'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC945'>&nbsp;&nbsp;</div><div class='line' id='LC946'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC947'><span class="cm">   * The HTMLFile transport creates a `forever iframe` based transport</span></div><div class='line' id='LC948'><span class="cm">   * for Internet Explorer. Regular forever iframe implementations will </span></div><div class='line' id='LC949'><span class="cm">   * continuously trigger the browsers buzy indicators. If the forever iframe</span></div><div class='line' id='LC950'><span class="cm">   * is created inside a `htmlfile` these indicators will not be trigged.</span></div><div class='line' id='LC951'><span class="cm">   *</span></div><div class='line' id='LC952'><span class="cm">   * @constructor</span></div><div class='line' id='LC953'><span class="cm">   * @extends {io.Transport.XHR}</span></div><div class='line' id='LC954'><span class="cm">   * @api public</span></div><div class='line' id='LC955'><span class="cm">   */</span></div><div class='line' id='LC956'>&nbsp;&nbsp;<span class="nx">HTMLFile</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">htmlfile</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC957'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC958'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC959'>&nbsp;&nbsp;</div><div class='line' id='LC960'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">inherit</span><span class="p">(</span><span class="nx">HTMLFile</span><span class="p">,</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">);</span></div><div class='line' id='LC961'>&nbsp;&nbsp;</div><div class='line' id='LC962'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC963'><span class="cm">   * The transport type, you use this to identify which transport was chosen.</span></div><div class='line' id='LC964'><span class="cm">   *</span></div><div class='line' id='LC965'><span class="cm">   * @type {String}</span></div><div class='line' id='LC966'><span class="cm">   * @api public</span></div><div class='line' id='LC967'><span class="cm">   */</span></div><div class='line' id='LC968'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;htmlfile&#39;</span><span class="p">;</span></div><div class='line' id='LC969'>&nbsp;&nbsp;</div><div class='line' id='LC970'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC971'><span class="cm">   * Starts the HTMLFile data stream for incoming messages. And registers a</span></div><div class='line' id='LC972'><span class="cm">   * onunload event listener so the HTMLFile will be destroyed.</span></div><div class='line' id='LC973'><span class="cm">   *</span></div><div class='line' id='LC974'><span class="cm">   * @api private</span></div><div class='line' id='LC975'><span class="cm">   */</span></div><div class='line' id='LC976'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC977'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC978'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">open</span><span class="p">();</span></div><div class='line' id='LC979'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s1">&#39;onunload&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span> <span class="nx">self</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC980'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC981'>&nbsp;&nbsp;</div><div class='line' id='LC982'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC983'><span class="cm">   * Creates a new ActiveX `htmlfile` with a forever loading iframe</span></div><div class='line' id='LC984'><span class="cm">   * that can be used to listen to messages. Inside the generated</span></div><div class='line' id='LC985'><span class="cm">   * `htmlfile` a reference will be made to the HTMLFile transport.</span></div><div class='line' id='LC986'><span class="cm">   *</span></div><div class='line' id='LC987'><span class="cm">   * @api private</span></div><div class='line' id='LC988'><span class="cm">   */</span></div><div class='line' id='LC989'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">open</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC990'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;htmlfile&#39;</span><span class="p">);</span></div><div class='line' id='LC991'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doc</span><span class="p">.</span><span class="nx">open</span><span class="p">();</span></div><div class='line' id='LC992'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doc</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s1">&#39;&lt;html&gt;&lt;/html&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC993'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doc</span><span class="p">.</span><span class="nx">parentWindow</span><span class="p">.</span><span class="nx">s</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC994'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doc</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC995'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC996'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">iframeC</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC997'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">iframeC</span><span class="p">);</span></div><div class='line' id='LC998'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">iframe</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;iframe&#39;</span><span class="p">);</span></div><div class='line' id='LC999'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframeC</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">);</span></div><div class='line' id='LC1000'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepareUrl</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="o">+</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">);</span></div><div class='line' id='LC1001'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1002'>&nbsp;&nbsp;</div><div class='line' id='LC1003'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1004'><span class="cm">   * The Socket.IO server will write script tags inside the forever</span></div><div class='line' id='LC1005'><span class="cm">   * iframe, this function will be used as callback for the incoming</span></div><div class='line' id='LC1006'><span class="cm">   * information.</span></div><div class='line' id='LC1007'><span class="cm">   *</span></div><div class='line' id='LC1008'><span class="cm">   * @param {String} data The message</span></div><div class='line' id='LC1009'><span class="cm">   * @param {document} doc Reference to the context</span></div><div class='line' id='LC1010'><span class="cm">   * @api private</span></div><div class='line' id='LC1011'><span class="cm">   */</span></div><div class='line' id='LC1012'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">doc</span><span class="p">){</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onData</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1014'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">script</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;script&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1015'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">script</span><span class="p">);</span></div><div class='line' id='LC1016'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1017'>&nbsp;&nbsp;</div><div class='line' id='LC1018'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1019'><span class="cm">   * Destroy the established connection, iframe and `htmlfile`.</span></div><div class='line' id='LC1020'><span class="cm">   * And calls the `CollectGarbage` function of Internet Explorer</span></div><div class='line' id='LC1021'><span class="cm">   * to release the memory.</span></div><div class='line' id='LC1022'><span class="cm">   *</span></div><div class='line' id='LC1023'><span class="cm">   * @api private</span></div><div class='line' id='LC1024'><span class="cm">   */</span></div><div class='line' id='LC1025'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">destroy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">){</span></div><div class='line' id='LC1027'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="s1">&#39;about:blank&#39;</span><span class="p">;</span></div><div class='line' id='LC1029'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC1030'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doc</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1031'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CollectGarbage</span><span class="p">();</span></div><div class='line' id='LC1032'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1033'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1034'>&nbsp;&nbsp;</div><div class='line' id='LC1035'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1036'><span class="cm">   * Disconnects the established connection.</span></div><div class='line' id='LC1037'><span class="cm">   *</span></div><div class='line' id='LC1038'><span class="cm">   * @returns {Transport} Chaining.</span></div><div class='line' id='LC1039'><span class="cm">   * @api public</span></div><div class='line' id='LC1040'><span class="cm">   */</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disconnect</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1044'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1045'>&nbsp;&nbsp;</div><div class='line' id='LC1046'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1047'><span class="cm">   * Checks if the browser supports this transport. The browser</span></div><div class='line' id='LC1048'><span class="cm">   * must have an `ActiveXObject` implementation.</span></div><div class='line' id='LC1049'><span class="cm">   *</span></div><div class='line' id='LC1050'><span class="cm">   * @return {Boolean}</span></div><div class='line' id='LC1051'><span class="cm">   * @api public</span></div><div class='line' id='LC1052'><span class="cm">   */</span></div><div class='line' id='LC1053'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">check</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1054'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;ActiveXObject&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">){</span></div><div class='line' id='LC1055'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1056'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;htmlfile&#39;</span><span class="p">);</span></div><div class='line' id='LC1057'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span> <span class="o">&amp;&amp;</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">check</span><span class="p">();</span></div><div class='line' id='LC1058'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC1059'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1060'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1061'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1062'>&nbsp;&nbsp;</div><div class='line' id='LC1063'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1064'><span class="cm">   * Check if cross domain requests are supported.</span></div><div class='line' id='LC1065'><span class="cm">   *</span></div><div class='line' id='LC1066'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC1067'><span class="cm">   * @api public</span></div><div class='line' id='LC1068'><span class="cm">   */</span></div><div class='line' id='LC1069'>&nbsp;&nbsp;<span class="nx">HTMLFile</span><span class="p">.</span><span class="nx">xdomainCheck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1070'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// we can probably do handling for sub-domains, we should test that it&#39;s cross domain but a subdomain here</span></div><div class='line' id='LC1071'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1072'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1073'>&nbsp;&nbsp;</div><div class='line' id='LC1074'><span class="p">})();</span></div><div class='line' id='LC1075'><span class="cm">/**</span></div><div class='line' id='LC1076'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC1077'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC1078'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC1079'><span class="cm"> */</span></div><div class='line' id='LC1080'><br/></div><div class='line' id='LC1081'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1082'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC1083'>&nbsp;&nbsp;</div><div class='line' id='LC1084'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1085'><span class="cm">   * The XHR-Multipart transport uses the a multipart XHR connection to</span></div><div class='line' id='LC1086'><span class="cm">   * stream in the data from the Socket.IO server</span></div><div class='line' id='LC1087'><span class="cm">   *</span></div><div class='line' id='LC1088'><span class="cm">   * @constructor</span></div><div class='line' id='LC1089'><span class="cm">   * @extends {io.Transport.XHR}</span></div><div class='line' id='LC1090'><span class="cm">   * @api public</span></div><div class='line' id='LC1091'><span class="cm">   */</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;<span class="nx">XHRMultipart</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="s1">&#39;xhr-multipart&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1093'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1094'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1095'>&nbsp;&nbsp;</div><div class='line' id='LC1096'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">inherit</span><span class="p">(</span><span class="nx">XHRMultipart</span><span class="p">,</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">);</span></div><div class='line' id='LC1097'>&nbsp;&nbsp;</div><div class='line' id='LC1098'>&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1099'><span class="cm">   * The transport type, you use this to identify which transport was chosen.</span></div><div class='line' id='LC1100'><span class="cm">   *</span></div><div class='line' id='LC1101'><span class="cm">   * @type {String}</span></div><div class='line' id='LC1102'><span class="cm">   * @api public</span></div><div class='line' id='LC1103'><span class="cm">   */</span></div><div class='line' id='LC1104'>&nbsp;&nbsp;<span class="nx">XHRMultipart</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;xhr-multipart&#39;</span><span class="p">;</span></div><div class='line' id='LC1105'>&nbsp;&nbsp;</div><div class='line' id='LC1106'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1107'><span class="cm">   * Starts the multipart stream for incomming messages.</span></div><div class='line' id='LC1108'><span class="cm">   *</span></div><div class='line' id='LC1109'><span class="cm">   * @api private</span></div><div class='line' id='LC1110'><span class="cm">   */</span></div><div class='line' id='LC1111'>&nbsp;&nbsp;<span class="nx">XHRMultipart</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">request</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span><span class="p">)</span> <span class="nx">self</span><span class="p">.</span><span class="nx">onData</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC1116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;</div><div class='line' id='LC1120'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1121'><span class="cm">   * Checks if browser supports this transport.</span></div><div class='line' id='LC1122'><span class="cm">   *</span></div><div class='line' id='LC1123'><span class="cm">   * @return {Boolean}</span></div><div class='line' id='LC1124'><span class="cm">   * @api public</span></div><div class='line' id='LC1125'><span class="cm">   */</span></div><div class='line' id='LC1126'>&nbsp;&nbsp;<span class="nx">XHRMultipart</span><span class="p">.</span><span class="nx">check</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;XMLHttpRequest&#39;</span> <span class="k">in</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;prototype&#39;</span> <span class="k">in</span> <span class="nx">XMLHttpRequest</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;multipart&#39;</span> <span class="k">in</span> <span class="nx">XMLHttpRequest</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC1128'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1129'>&nbsp;&nbsp;</div><div class='line' id='LC1130'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1131'><span class="cm">   * Check if cross domain requests are supported.</span></div><div class='line' id='LC1132'><span class="cm">   *</span></div><div class='line' id='LC1133'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC1134'><span class="cm">   * @api public</span></div><div class='line' id='LC1135'><span class="cm">   */</span></div><div class='line' id='LC1136'>&nbsp;&nbsp;<span class="nx">XHRMultipart</span><span class="p">.</span><span class="nx">xdomainCheck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1138'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;</div><div class='line' id='LC1140'><span class="p">})();</span></div><div class='line' id='LC1141'><span class="cm">/**</span></div><div class='line' id='LC1142'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC1143'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC1144'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC1145'><span class="cm"> */</span></div><div class='line' id='LC1146'><br/></div><div class='line' id='LC1147'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1148'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC1149'>&nbsp;&nbsp;</div><div class='line' id='LC1150'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1151'><span class="cm">   * A small stub function that will be used to reduce memory leaks.</span></div><div class='line' id='LC1152'><span class="cm">   *</span></div><div class='line' id='LC1153'><span class="cm">   * @type {Function}</span></div><div class='line' id='LC1154'><span class="cm">   * @api private</span></div><div class='line' id='LC1155'><span class="cm">   */</span></div><div class='line' id='LC1156'>&nbsp;&nbsp;<span class="nx">empty</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Function</span><span class="p">(),</span></div><div class='line' id='LC1157'>&nbsp;&nbsp;</div><div class='line' id='LC1158'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1159'><span class="cm">   * The XHR-polling transport uses long polling XHR requests to create a</span></div><div class='line' id='LC1160'><span class="cm">   * &quot;persistent&quot; connection with the server.</span></div><div class='line' id='LC1161'><span class="cm">   *</span></div><div class='line' id='LC1162'><span class="cm">   * @constructor</span></div><div class='line' id='LC1163'><span class="cm">   * @extends {io.Transport.XHR}</span></div><div class='line' id='LC1164'><span class="cm">   * @api public</span></div><div class='line' id='LC1165'><span class="cm">   */</span></div><div class='line' id='LC1166'>&nbsp;&nbsp;<span class="nx">XHRPolling</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="s1">&#39;xhr-polling&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1168'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1169'>&nbsp;&nbsp;</div><div class='line' id='LC1170'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">inherit</span><span class="p">(</span><span class="nx">XHRPolling</span><span class="p">,</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">);</span></div><div class='line' id='LC1171'>&nbsp;&nbsp;</div><div class='line' id='LC1172'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1173'><span class="cm">   * The transport type, you use this to identify which transport was chosen.</span></div><div class='line' id='LC1174'><span class="cm">   *</span></div><div class='line' id='LC1175'><span class="cm">   * @type {string}</span></div><div class='line' id='LC1176'><span class="cm">   * @api public</span></div><div class='line' id='LC1177'><span class="cm">   */</span></div><div class='line' id='LC1178'>&nbsp;&nbsp;<span class="nx">XHRPolling</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;xhr-polling&#39;</span><span class="p">;</span></div><div class='line' id='LC1179'>&nbsp;&nbsp;</div><div class='line' id='LC1180'>&nbsp;&nbsp;<span class="cm">/** </span></div><div class='line' id='LC1181'><span class="cm">   * Establish a connection, for iPhone and Android this will be done once the page</span></div><div class='line' id='LC1182'><span class="cm">   * is loaded.</span></div><div class='line' id='LC1183'><span class="cm">   *</span></div><div class='line' id='LC1184'><span class="cm">   * @returns {Transport} Chaining.</span></div><div class='line' id='LC1185'><span class="cm">   * @api public</span></div><div class='line' id='LC1186'><span class="cm">   */</span></div><div class='line' id='LC1187'>&nbsp;&nbsp;<span class="nx">XHRPolling</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">defer</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">self</span><span class="p">)</span> <span class="p">});</span></div><div class='line' id='LC1190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1191'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1192'>&nbsp;&nbsp;</div><div class='line' id='LC1193'>&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1194'><span class="cm">   * Starts a XHR request to wait for incoming messages.</span></div><div class='line' id='LC1195'><span class="cm">   *</span></div><div class='line' id='LC1196'><span class="cm">   * @api private</span></div><div class='line' id='LC1197'><span class="cm">   */</span></div><div class='line' id='LC1198'>&nbsp;&nbsp;<span class="nx">XHRPolling</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">request</span><span class="p">(</span><span class="o">+</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">,</span> <span class="s1">&#39;GET&#39;</span><span class="p">);</span></div><div class='line' id='LC1201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">status</span><span class="p">;</span></div><div class='line' id='LC1203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span><span class="p">){</span></div><div class='line' id='LC1204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="nx">empty</span><span class="p">;</span></div><div class='line' id='LC1205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span> <span class="nx">status</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span><span class="p">;</span> <span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC1206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">){</span></div><div class='line' id='LC1207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">onData</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC1208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">get</span><span class="p">();</span></div><div class='line' id='LC1209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">();</span></div><div class='line' id='LC1211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1215'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1216'>&nbsp;&nbsp;</div><div class='line' id='LC1217'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1218'><span class="cm">   * Checks if browser supports this transport.</span></div><div class='line' id='LC1219'><span class="cm">   *</span></div><div class='line' id='LC1220'><span class="cm">   * @return {Boolean}</span></div><div class='line' id='LC1221'><span class="cm">   * @api public</span></div><div class='line' id='LC1222'><span class="cm">   */</span></div><div class='line' id='LC1223'>&nbsp;&nbsp;<span class="nx">XHRPolling</span><span class="p">.</span><span class="nx">check</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">check</span><span class="p">();</span></div><div class='line' id='LC1225'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1226'>&nbsp;&nbsp;</div><div class='line' id='LC1227'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1228'><span class="cm">   * Check if cross domain requests are supported</span></div><div class='line' id='LC1229'><span class="cm">   *</span></div><div class='line' id='LC1230'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC1231'><span class="cm">   * @api public</span></div><div class='line' id='LC1232'><span class="cm">   */</span></div><div class='line' id='LC1233'>&nbsp;&nbsp;<span class="nx">XHRPolling</span><span class="p">.</span><span class="nx">xdomainCheck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">xdomainCheck</span><span class="p">();</span></div><div class='line' id='LC1235'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1236'><br/></div><div class='line' id='LC1237'><span class="p">})();</span></div><div class='line' id='LC1238'><br/></div><div class='line' id='LC1239'><span class="cm">/**</span></div><div class='line' id='LC1240'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC1241'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC1242'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC1243'><span class="cm"> */</span></div><div class='line' id='LC1244'><br/></div><div class='line' id='LC1245'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1246'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">,</span></div><div class='line' id='LC1247'>&nbsp;&nbsp;</div><div class='line' id='LC1248'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1249'><span class="cm">   * The JSONP transport creates an persistent connection by dynamically</span></div><div class='line' id='LC1250'><span class="cm">   * inserting a script tag in the page. This script tag will receive the</span></div><div class='line' id='LC1251'><span class="cm">   * information of the Socket.IO server. When new information is received</span></div><div class='line' id='LC1252'><span class="cm">   * it creates a new script tag for the new data stream.</span></div><div class='line' id='LC1253'><span class="cm">   *</span></div><div class='line' id='LC1254'><span class="cm">   * @constructor</span></div><div class='line' id='LC1255'><span class="cm">   * @extends {io.Transport.xhr-polling}</span></div><div class='line' id='LC1256'><span class="cm">   * @api public</span></div><div class='line' id='LC1257'><span class="cm">   */</span></div><div class='line' id='LC1258'>&nbsp;&nbsp;<span class="nx">JSONPPolling</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="s1">&#39;jsonp-polling&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">XHR</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">insertAt</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;head&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">JSONP</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">JSONP</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1263'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1264'>&nbsp;&nbsp;</div><div class='line' id='LC1265'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">inherit</span><span class="p">(</span><span class="nx">JSONPPolling</span><span class="p">,</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="s1">&#39;xhr-polling&#39;</span><span class="p">]);</span></div><div class='line' id='LC1266'>&nbsp;&nbsp;</div><div class='line' id='LC1267'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1268'><span class="cm">   * A list of all JSONPolling transports, this is used for by</span></div><div class='line' id='LC1269'><span class="cm">   * the Socket.IO server to distribute the callbacks.</span></div><div class='line' id='LC1270'><span class="cm">   *</span></div><div class='line' id='LC1271'><span class="cm">   * @type {Array}</span></div><div class='line' id='LC1272'><span class="cm">   * @api private</span></div><div class='line' id='LC1273'><span class="cm">   */</span></div><div class='line' id='LC1274'>&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">JSONP</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1275'>&nbsp;&nbsp;</div><div class='line' id='LC1276'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1277'><span class="cm">   * The transport type, you use this to identify which transport was chosen.</span></div><div class='line' id='LC1278'><span class="cm">   *</span></div><div class='line' id='LC1279'><span class="cm">   * @type {String}</span></div><div class='line' id='LC1280'><span class="cm">   * @api public</span></div><div class='line' id='LC1281'><span class="cm">   */</span></div><div class='line' id='LC1282'>&nbsp;&nbsp;<span class="nx">JSONPPolling</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;jsonp-polling&#39;</span><span class="p">;</span></div><div class='line' id='LC1283'>&nbsp;&nbsp;</div><div class='line' id='LC1284'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1285'><span class="cm">   * Posts a encoded message to the Socket.IO server using an iframe.</span></div><div class='line' id='LC1286'><span class="cm">   * The iframe is used because script tags can create POST based requests.</span></div><div class='line' id='LC1287'><span class="cm">   * The iframe is positioned outside of the view so the user does not</span></div><div class='line' id='LC1288'><span class="cm">   * notice it&#39;s existence.</span></div><div class='line' id='LC1289'><span class="cm">   *</span></div><div class='line' id='LC1290'><span class="cm">   * @param {String} data A encoded message.</span></div><div class='line' id='LC1291'><span class="cm">   * @api private</span></div><div class='line' id='LC1292'><span class="cm">   */</span></div><div class='line' id='LC1293'>&nbsp;&nbsp;<span class="nx">JSONPPolling</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sendIORequest</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC1294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;form&#39;</span> <span class="k">in</span> <span class="k">this</span><span class="p">)){</span></div><div class='line' id='LC1296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;FORM&#39;</span><span class="p">),</span></div><div class='line' id='LC1297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">area</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;TEXTAREA&#39;</span><span class="p">),</span></div><div class='line' id='LC1298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">iframeId</span> <span class="o">=</span> <span class="s1">&#39;socket_io_iframe_&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">,</span></div><div class='line' id='LC1299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span><span class="p">;</span></div><div class='line' id='LC1300'>&nbsp;&nbsp;</div><div class='line' id='LC1301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="s1">&#39;absolute&#39;</span><span class="p">;</span></div><div class='line' id='LC1302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="s1">&#39;-1000px&#39;</span><span class="p">;</span></div><div class='line' id='LC1303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="s1">&#39;-1000px&#39;</span><span class="p">;</span></div><div class='line' id='LC1304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC1305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC1306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">action</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepareUrl</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="o">+</span><span class="k">new</span> <span class="nb">Date</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC1307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">area</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;data&#39;</span><span class="p">;</span></div><div class='line' id='LC1308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">area</span><span class="p">);</span></div><div class='line' id='LC1309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">insertAt</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">form</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">form</span><span class="p">);</span></div><div class='line' id='LC1311'>&nbsp;&nbsp;</div><div class='line' id='LC1312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">form</span> <span class="o">=</span> <span class="nx">form</span><span class="p">;</span></div><div class='line' id='LC1313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">area</span> <span class="o">=</span> <span class="nx">area</span><span class="p">;</span></div><div class='line' id='LC1314'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1315'>&nbsp;&nbsp;</div><div class='line' id='LC1316'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">complete</span><span class="p">(){</span></div><div class='line' id='LC1317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initIframe</span><span class="p">();</span></div><div class='line' id='LC1318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">posting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">checkSend</span><span class="p">();</span></div><div class='line' id='LC1320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1321'>&nbsp;&nbsp;</div><div class='line' id='LC1322'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">initIframe</span><span class="p">(){</span></div><div class='line' id='LC1323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">iframe</span><span class="p">){</span></div><div class='line' id='LC1324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">iframe</span><span class="p">);</span></div><div class='line' id='LC1325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1326'>&nbsp;&nbsp;</div><div class='line' id='LC1327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ie6 dynamic iframes with target=&quot;&quot; support (thanks Chris Lambacher)</span></div><div class='line' id='LC1329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;&lt;iframe name=&quot;&#39;</span><span class="o">+</span> <span class="nx">self</span><span class="p">.</span><span class="nx">iframeId</span> <span class="o">+</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC1330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC1331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;iframe&#39;</span><span class="p">);</span></div><div class='line' id='LC1332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">iframeId</span><span class="p">;</span></div><div class='line' id='LC1333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1334'>&nbsp;&nbsp;</div><div class='line' id='LC1335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">iframeId</span><span class="p">;</span></div><div class='line' id='LC1336'>&nbsp;&nbsp;</div><div class='line' id='LC1337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">iframe</span><span class="p">);</span></div><div class='line' id='LC1338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">iframe</span> <span class="o">=</span> <span class="nx">iframe</span><span class="p">;</span></div><div class='line' id='LC1339'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1340'>&nbsp;&nbsp;</div><div class='line' id='LC1341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initIframe</span><span class="p">();</span></div><div class='line' id='LC1342'>&nbsp;&nbsp;</div><div class='line' id='LC1343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">posting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">area</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC1345'>&nbsp;&nbsp;</div><div class='line' id='LC1346'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">form</span><span class="p">.</span><span class="nx">submit</span><span class="p">();</span></div><div class='line' id='LC1348'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC1349'>&nbsp;&nbsp;</div><div class='line' id='LC1350'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">){</span></div><div class='line' id='LC1351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">iframe</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="s1">&#39;complete&#39;</span><span class="p">)</span> <span class="nx">complete</span><span class="p">();</span></div><div class='line' id='LC1353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1354'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">iframe</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="nx">complete</span><span class="p">;</span></div><div class='line' id='LC1356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1357'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1358'>&nbsp;&nbsp;</div><div class='line' id='LC1359'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1360'><span class="cm">   * Creates a new JSONP poll that can be used to listen</span></div><div class='line' id='LC1361'><span class="cm">   * for messages from the Socket.IO server.</span></div><div class='line' id='LC1362'><span class="cm">   *</span></div><div class='line' id='LC1363'><span class="cm">   * @api private</span></div><div class='line' id='LC1364'><span class="cm">   */</span></div><div class='line' id='LC1365'>&nbsp;&nbsp;<span class="nx">JSONPPolling</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1366'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC1367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">script</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;SCRIPT&#39;</span><span class="p">);</span></div><div class='line' id='LC1368'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">script</span><span class="p">){</span></div><div class='line' id='LC1369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">script</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">script</span><span class="p">);</span></div><div class='line' id='LC1370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">script</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1371'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1372'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">script</span><span class="p">.</span><span class="nx">async</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">script</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepareUrl</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="o">+</span><span class="k">new</span> <span class="nb">Date</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC1374'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">script</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">onDisconnect</span><span class="p">();</span></div><div class='line' id='LC1376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">insertAt</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">script</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1378'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">script</span> <span class="o">=</span> <span class="nx">script</span><span class="p">;</span></div><div class='line' id='LC1379'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1380'>&nbsp;&nbsp;</div><div class='line' id='LC1381'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1382'><span class="cm">   * Callback function for the incoming message stream from the Socket.IO server.</span></div><div class='line' id='LC1383'><span class="cm">   *</span></div><div class='line' id='LC1384'><span class="cm">   * @param {String} data The message</span></div><div class='line' id='LC1385'><span class="cm">   * @param {document} doc Reference to the context</span></div><div class='line' id='LC1386'><span class="cm">   * @api private</span></div><div class='line' id='LC1387'><span class="cm">   */</span></div><div class='line' id='LC1388'>&nbsp;&nbsp;<span class="nx">JSONPPolling</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onData</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1390'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">get</span><span class="p">();</span></div><div class='line' id='LC1391'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1392'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1393'>&nbsp;&nbsp;</div><div class='line' id='LC1394'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1395'><span class="cm">   * Checks if browser supports this transport.</span></div><div class='line' id='LC1396'><span class="cm">   *</span></div><div class='line' id='LC1397'><span class="cm">   * @return {Boolean}</span></div><div class='line' id='LC1398'><span class="cm">   * @api public</span></div><div class='line' id='LC1399'><span class="cm">   */</span></div><div class='line' id='LC1400'>&nbsp;&nbsp;<span class="nx">JSONPPolling</span><span class="p">.</span><span class="nx">check</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1401'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1402'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1403'>&nbsp;&nbsp;</div><div class='line' id='LC1404'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1405'><span class="cm">   * Check if cross domain requests are supported</span></div><div class='line' id='LC1406'><span class="cm">   *</span></div><div class='line' id='LC1407'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC1408'><span class="cm">   * @api public</span></div><div class='line' id='LC1409'><span class="cm">   */</span></div><div class='line' id='LC1410'>&nbsp;&nbsp;<span class="nx">JSONPPolling</span><span class="p">.</span><span class="nx">xdomainCheck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1411'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1412'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1413'><span class="p">})();</span></div><div class='line' id='LC1414'><br/></div><div class='line' id='LC1415'><span class="cm">/**</span></div><div class='line' id='LC1416'><span class="cm"> * socket.io-node-client</span></div><div class='line' id='LC1417'><span class="cm"> * Copyright(c) 2011 LearnBoost &lt;dev@learnboost.com&gt;</span></div><div class='line' id='LC1418'><span class="cm"> * MIT Licensed</span></div><div class='line' id='LC1419'><span class="cm"> */</span></div><div class='line' id='LC1420'><br/></div><div class='line' id='LC1421'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1422'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">io</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">io</span><span class="p">;</span></div><div class='line' id='LC1423'>&nbsp;&nbsp;</div><div class='line' id='LC1424'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1425'><span class="cm">   * Create a new `Socket.IO client` which can establish a persisted</span></div><div class='line' id='LC1426'><span class="cm">   * connection with a Socket.IO enabled server.</span></div><div class='line' id='LC1427'><span class="cm">   *</span></div><div class='line' id='LC1428'><span class="cm">   * Options:</span></div><div class='line' id='LC1429'><span class="cm">   *   - `secure`  Use secure connections, defaulting to false.</span></div><div class='line' id='LC1430'><span class="cm">   *   - `document`  Reference to the document object to retrieve and set cookies, defaulting to document.</span></div><div class='line' id='LC1431'><span class="cm">   *   - `port`  The port where the Socket.IO server listening on, defaulting to location.port.</span></div><div class='line' id='LC1432'><span class="cm">   *   - `resource`  The path or namespace on the server where the Socket.IO requests are intercepted, defaulting to &#39;socket.io&#39;.</span></div><div class='line' id='LC1433'><span class="cm">   *   - `transports`  A ordered list with the available transports, defaulting to all transports.</span></div><div class='line' id='LC1434'><span class="cm">   *   - `transportOption`  A {Object} containing the options for each transport. The key of the object should reflect</span></div><div class='line' id='LC1435'><span class="cm">   *      name of the transport and the value a {Object} with the options.</span></div><div class='line' id='LC1436'><span class="cm">   *   - `connectTimeout`  The duration in milliseconds that a transport has to establish a working connection, defaulting to 5000.</span></div><div class='line' id='LC1437'><span class="cm">   *   - `tryTransportsOnConnectTimeout`  Should we attempt other transport methods when the connectTimeout occurs, defaulting to true.</span></div><div class='line' id='LC1438'><span class="cm">   *   - `reconnect`  Should reconnection happen automatically, defaulting to true.</span></div><div class='line' id='LC1439'><span class="cm">   *   - `reconnectionDelay`  The delay in milliseconds before we attempt to establish a working connection. This value will</span></div><div class='line' id='LC1440'><span class="cm">   *      increase automatically using a exponential back off algorithm. Defaulting to 500.</span></div><div class='line' id='LC1441'><span class="cm">   *   - `maxReconnectionAttempts`  Number of attempts we should make before seizing the reconnect operation, defaulting to 10.</span></div><div class='line' id='LC1442'><span class="cm">   *   - `rememberTransport` Should the successfully connected transport be remembered in a cookie, defaulting to true.</span></div><div class='line' id='LC1443'><span class="cm">   *</span></div><div class='line' id='LC1444'><span class="cm">   * Examples:</span></div><div class='line' id='LC1445'><span class="cm">   *</span></div><div class='line' id='LC1446'><span class="cm">   * Create client with the default settings.</span></div><div class='line' id='LC1447'><span class="cm">   *</span></div><div class='line' id='LC1448'><span class="cm">   *     var socket = new io.Socket();</span></div><div class='line' id='LC1449'><span class="cm">   *     socket.connect();</span></div><div class='line' id='LC1450'><span class="cm">   *     socket.on(&#39;message&#39;, function(msg){</span></div><div class='line' id='LC1451'><span class="cm">   *       console.log(&#39;Received message: &#39; + msg );</span></div><div class='line' id='LC1452'><span class="cm">   *     });</span></div><div class='line' id='LC1453'><span class="cm">   *     socket.on(&#39;connect&#39;, function(){</span></div><div class='line' id='LC1454'><span class="cm">   *       socket.send(&#39;Hello from client&#39;);</span></div><div class='line' id='LC1455'><span class="cm">   *     });</span></div><div class='line' id='LC1456'><span class="cm">   *</span></div><div class='line' id='LC1457'><span class="cm">   * Create a connection with server on a different port and host.</span></div><div class='line' id='LC1458'><span class="cm">   *</span></div><div class='line' id='LC1459'><span class="cm">   *     var socket = new io.Socket(&#39;http://example.com&#39;,{port:1337});</span></div><div class='line' id='LC1460'><span class="cm">   *</span></div><div class='line' id='LC1461'><span class="cm">   * @constructor</span></div><div class='line' id='LC1462'><span class="cm">   * @exports Socket as io.Socket</span></div><div class='line' id='LC1463'><span class="cm">   * @param {String} [host] The host where the Socket.IO server is located, it defaults to the host that runs the page.</span></div><div class='line' id='LC1464'><span class="cm">   * @param {Objects} [options] The options that will configure the Socket.IO client. </span></div><div class='line' id='LC1465'><span class="cm">   * @property {String} host The supplied host arguments or the host that page runs.</span></div><div class='line' id='LC1466'><span class="cm">   * @property {Object} options The passed options combined with the defaults.</span></div><div class='line' id='LC1467'><span class="cm">   * @property {Boolean} connected Whether the socket is connected or not.</span></div><div class='line' id='LC1468'><span class="cm">   * @property {Boolean} connecting Whether the socket is connecting or not.</span></div><div class='line' id='LC1469'><span class="cm">   * @property {Boolean} reconnecting Whether the socket is reconnecting or not.</span></div><div class='line' id='LC1470'><span class="cm">   * @property {Object} transport The selected transport instance.</span></div><div class='line' id='LC1471'><span class="cm">   * @api public</span></div><div class='line' id='LC1472'><span class="cm">   */</span></div><div class='line' id='LC1473'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Socket</span> <span class="o">=</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Socket</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">host</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC1474'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">host</span> <span class="o">=</span> <span class="nx">host</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">domain</span><span class="p">;</span></div><div class='line' id='LC1475'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">secure</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="o">:</span> <span class="nb">document</span><span class="p">,</span></div><div class='line' id='LC1478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">port</span><span class="o">:</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">port</span> <span class="o">||</span> <span class="mi">80</span><span class="p">,</span></div><div class='line' id='LC1479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resource</span><span class="o">:</span> <span class="s1">&#39;socket.io&#39;</span><span class="p">,</span></div><div class='line' id='LC1480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transports</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;websocket&#39;</span><span class="p">,</span> <span class="s1">&#39;flashsocket&#39;</span><span class="p">,</span> <span class="s1">&#39;htmlfile&#39;</span><span class="p">,</span> <span class="s1">&#39;xhr-multipart&#39;</span><span class="p">,</span> <span class="s1">&#39;xhr-polling&#39;</span><span class="p">,</span> <span class="s1">&#39;jsonp-polling&#39;</span><span class="p">],</span></div><div class='line' id='LC1481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transportOptions</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC1482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;xhr-polling&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC1483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="mi">25000</span> <span class="c1">// based on polling duration default</span></div><div class='line' id='LC1484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;jsonp-polling&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC1486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span><span class="o">:</span> <span class="mi">25000</span></div><div class='line' id='LC1487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">connectTimeout</span><span class="o">:</span> <span class="mi">5000</span><span class="p">,</span></div><div class='line' id='LC1490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tryTransportsOnConnectTimeout</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC1491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reconnect</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC1492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reconnectionDelay</span><span class="o">:</span> <span class="mi">500</span><span class="p">,</span></div><div class='line' id='LC1493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxReconnectionAttempts</span><span class="o">:</span> <span class="mi">10</span><span class="p">,</span></div><div class='line' id='LC1494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rememberTransport</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC1495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">io</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">merge</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connected</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1498'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connecting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">reconnecting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1500'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1501'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">transport</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getTransport</span><span class="p">();</span></div><div class='line' id='LC1502'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">transport</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;console&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;No transport available&#39;</span><span class="p">);</span></div><div class='line' id='LC1503'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1504'>&nbsp;&nbsp;</div><div class='line' id='LC1505'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1506'><span class="cm">   * Find an available transport based on the options supplied in the constructor. For example if the</span></div><div class='line' id='LC1507'><span class="cm">   * `rememberTransport` option was set we will only connect with the previous successfully connected transport.</span></div><div class='line' id='LC1508'><span class="cm">   * The supplied transports can be overruled if the `override` argument is supplied.</span></div><div class='line' id='LC1509'><span class="cm">   *</span></div><div class='line' id='LC1510'><span class="cm">   * Example:</span></div><div class='line' id='LC1511'><span class="cm">   *</span></div><div class='line' id='LC1512'><span class="cm">   * Override the existing transports.</span></div><div class='line' id='LC1513'><span class="cm">   *</span></div><div class='line' id='LC1514'><span class="cm">   *     var socket = new io.Socket();</span></div><div class='line' id='LC1515'><span class="cm">   *     socket.getTransport([&#39;jsonp-polling&#39;,&#39;websocket&#39;]);</span></div><div class='line' id='LC1516'><span class="cm">   *     // returns the json-polling transport because it&#39;s availabe in all browsers.</span></div><div class='line' id='LC1517'><span class="cm">   *</span></div><div class='line' id='LC1518'><span class="cm">   * @param {Array} [override] A ordered list with transports that should be used instead of the options.transports.</span></div><div class='line' id='LC1519'><span class="cm">   * @returns {Null|Transport} The available transport.</span></div><div class='line' id='LC1520'><span class="cm">   * @api private</span></div><div class='line' id='LC1521'><span class="cm">   */</span></div><div class='line' id='LC1522'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getTransport</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">override</span><span class="p">){</span></div><div class='line' id='LC1523'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">transports</span> <span class="o">=</span> <span class="nx">override</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transports</span><span class="p">,</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC1524'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">rememberTransport</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">override</span><span class="p">){</span></div><div class='line' id='LC1525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">match</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s1">&#39;(?:^|;)\\s*socketio=([^;]*)&#39;</span><span class="p">);</span></div><div class='line' id='LC1526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">){</span></div><div class='line' id='LC1527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">rememberedTransport</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transports</span> <span class="o">=</span> <span class="p">[</span><span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">])];</span></div><div class='line' id='LC1529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> </div><div class='line' id='LC1531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">transport</span><span class="p">;</span> <span class="nx">transport</span> <span class="o">=</span> <span class="nx">transports</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC1532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="nx">transport</span><span class="p">]</span> </div><div class='line' id='LC1533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="nx">transport</span><span class="p">].</span><span class="nx">check</span><span class="p">()</span> </div><div class='line' id='LC1534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isXDomain</span><span class="p">()</span> <span class="o">||</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="nx">transport</span><span class="p">].</span><span class="nx">xdomainCheck</span><span class="p">())){</span></div><div class='line' id='LC1535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">io</span><span class="p">.</span><span class="nx">Transport</span><span class="p">[</span><span class="nx">transport</span><span class="p">](</span><span class="k">this</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transportOptions</span><span class="p">[</span><span class="nx">transport</span><span class="p">]</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC1536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1537'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1538'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1539'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1540'>&nbsp;&nbsp;</div><div class='line' id='LC1541'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1542'><span class="cm">   * Establish a new connection with the Socket.IO server. This is done using the selected transport by the</span></div><div class='line' id='LC1543'><span class="cm">   * getTransport method. If the `connectTimeout` and the `tryTransportsOnConnectTimeout` options are set</span></div><div class='line' id='LC1544'><span class="cm">   * the client will keep trying to connect to the server using a different transports when the timeout occurs.</span></div><div class='line' id='LC1545'><span class="cm">   *</span></div><div class='line' id='LC1546'><span class="cm">   * Example:</span></div><div class='line' id='LC1547'><span class="cm">   *</span></div><div class='line' id='LC1548'><span class="cm">   * Create a Socket.IO client with a connect callback (We assume we have the WebSocket transport avaliable).</span></div><div class='line' id='LC1549'><span class="cm">   *</span></div><div class='line' id='LC1550'><span class="cm">   *     var socket = new io.Socket();</span></div><div class='line' id='LC1551'><span class="cm">   *     socket.connect(function(transport){</span></div><div class='line' id='LC1552'><span class="cm">   *       console.log(&quot;Connected to server using the &quot; + socket.transport.type + &quot; transport.&quot;);</span></div><div class='line' id='LC1553'><span class="cm">   *     });</span></div><div class='line' id='LC1554'><span class="cm">   *     // =&gt; &quot;Connected to server using the WebSocket transport.&quot;</span></div><div class='line' id='LC1555'><span class="cm">   *</span></div><div class='line' id='LC1556'><span class="cm">   * @param {Function} [fn] Callback.</span></div><div class='line' id='LC1557'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1558'><span class="cm">   * @api public</span></div><div class='line' id='LC1559'><span class="cm">   */</span></div><div class='line' id='LC1560'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">connect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">){</span></div><div class='line' id='LC1561'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">transport</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">connected</span><span class="p">){</span></div><div class='line' id='LC1562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">connecting</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">disconnect</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connecting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;connecting&#39;</span><span class="p">,</span> <span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">type</span><span class="p">]);</span></div><div class='line' id='LC1565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">connect</span><span class="p">();</span></div><div class='line' id='LC1566'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">connectTimeout</span><span class="p">){</span></div><div class='line' id='LC1567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connectTimeoutTimer</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">connected</span><span class="p">){</span></div><div class='line' id='LC1570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">disconnect</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tryTransportsOnConnectTimeout</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">rememberedTransport</span><span class="p">){</span></div><div class='line' id='LC1572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span><span class="p">)</span> <span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transports</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">transports</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span><span class="p">;</span></div><div class='line' id='LC1574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="nx">transports</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">transports</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">type</span><span class="p">){}</span></div><div class='line' id='LC1575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">transports</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span></div><div class='line' id='LC1576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">transport</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">getTransport</span><span class="p">(</span><span class="nx">transports</span><span class="p">);</span></div><div class='line' id='LC1577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">connect</span><span class="p">();</span></div><div class='line' id='LC1578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">self</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;connect_failed&#39;</span><span class="p">);</span></div><div class='line' id='LC1581'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1582'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="k">delete</span> <span class="nx">self</span><span class="p">.</span><span class="nx">remainingTransports</span><span class="p">;</span></div><div class='line' id='LC1583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">connectTimeout</span><span class="p">);</span></div><div class='line' id='LC1584'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1585'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fn</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">fn</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">once</span><span class="p">(</span><span class="s1">&#39;connect&#39;</span><span class="p">,</span><span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC1587'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1588'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1589'>&nbsp;&nbsp;</div><div class='line' id='LC1590'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1591'><span class="cm">   * Sends the data to the Socket.IO server. If there isn&#39;t a connection to the server</span></div><div class='line' id='LC1592'><span class="cm">   * the data will be forwarded to the queue.</span></div><div class='line' id='LC1593'><span class="cm">   *</span></div><div class='line' id='LC1594'><span class="cm">   * @param {Mixed} data The data that needs to be send to the Socket.IO server.</span></div><div class='line' id='LC1595'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1596'><span class="cm">   * @api public</span></div><div class='line' id='LC1597'><span class="cm">   */</span></div><div class='line' id='LC1598'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC1599'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">transport</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">connected</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">queue</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1600'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1601'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1602'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1603'>&nbsp;&nbsp;</div><div class='line' id='LC1604'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1605'><span class="cm">   * Disconnect the established connect.</span></div><div class='line' id='LC1606'><span class="cm">   *</span></div><div class='line' id='LC1607'><span class="cm">   * @param {Boolean} [soft] A soft disconnect will keep the reconnect settings enabled.</span></div><div class='line' id='LC1608'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1609'><span class="cm">   * @api public</span></div><div class='line' id='LC1610'><span class="cm">   */</span></div><div class='line' id='LC1611'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">soft</span><span class="p">){</span></div><div class='line' id='LC1612'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">connectTimeoutTimer</span><span class="p">)</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">connectTimeoutTimer</span><span class="p">);</span></div><div class='line' id='LC1613'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">soft</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">reconnect</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">disconnect</span><span class="p">();</span></div><div class='line' id='LC1615'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1616'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1617'>&nbsp;&nbsp;</div><div class='line' id='LC1618'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1619'><span class="cm">   * Adds a new eventListener for the given event.</span></div><div class='line' id='LC1620'><span class="cm">   *</span></div><div class='line' id='LC1621'><span class="cm">   * Example:</span></div><div class='line' id='LC1622'><span class="cm">   *</span></div><div class='line' id='LC1623'><span class="cm">   *     var socket = new io.Socket();</span></div><div class='line' id='LC1624'><span class="cm">   *     socket.on(&quot;connect&quot;, function(transport){</span></div><div class='line' id='LC1625'><span class="cm">   *       console.log(&quot;Connected to server using the &quot; + socket.transport.type + &quot; transport.&quot;);</span></div><div class='line' id='LC1626'><span class="cm">   *     });</span></div><div class='line' id='LC1627'><span class="cm">   *     // =&gt; &quot;Connected to server using the WebSocket transport.&quot;</span></div><div class='line' id='LC1628'><span class="cm">   *</span></div><div class='line' id='LC1629'><span class="cm">   * @param {String} name The name of the event.</span></div><div class='line' id='LC1630'><span class="cm">   * @param {Function} fn The function that is called once the event is emitted.</span></div><div class='line' id='LC1631'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1632'><span class="cm">   * @api public</span></div><div class='line' id='LC1633'><span class="cm">   */</span></div><div class='line' id='LC1634'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">on</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">){</span></div><div class='line' id='LC1635'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">))</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1636'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC1637'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1638'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1639'>&nbsp;&nbsp;</div><div class='line' id='LC1640'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1641'><span class="cm">   * Adds a one time listener, the listener will be removed after the event is emitted.</span></div><div class='line' id='LC1642'><span class="cm">   *</span></div><div class='line' id='LC1643'><span class="cm">   * Example:</span></div><div class='line' id='LC1644'><span class="cm">   *</span></div><div class='line' id='LC1645'><span class="cm">   *     var socket = new io.Socket();</span></div><div class='line' id='LC1646'><span class="cm">   *     socket.once(&quot;custom:event&quot;, function(){</span></div><div class='line' id='LC1647'><span class="cm">   *       console.log(&quot;I should only log once.&quot;);</span></div><div class='line' id='LC1648'><span class="cm">   *     });</span></div><div class='line' id='LC1649'><span class="cm">   *     socket.emit(&quot;custom:event&quot;);</span></div><div class='line' id='LC1650'><span class="cm">   *     socket.emit(&quot;custom:event&quot;);</span></div><div class='line' id='LC1651'><span class="cm">   *     // =&gt; &quot;I should only log once.&quot;</span></div><div class='line' id='LC1652'><span class="cm">   *</span></div><div class='line' id='LC1653'><span class="cm">   * @param {String} name The name of the event.</span></div><div class='line' id='LC1654'><span class="cm">   * @param {Function} fn The function that is called once the event is emitted.</span></div><div class='line' id='LC1655'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1656'><span class="cm">   * @api public</span></div><div class='line' id='LC1657'><span class="cm">   */</span></div><div class='line' id='LC1658'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">once</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">){</span></div><div class='line' id='LC1659'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC1660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">once</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">removeEvent</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">once</span><span class="p">);</span></div><div class='line' id='LC1662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1664'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">once</span><span class="p">.</span><span class="nx">ref</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">;</span></div><div class='line' id='LC1665'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">once</span><span class="p">);</span></div><div class='line' id='LC1666'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1667'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1668'>&nbsp;&nbsp;</div><div class='line' id='LC1669'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1670'><span class="cm">   * Emit a event to all listeners.</span></div><div class='line' id='LC1671'><span class="cm">   *</span></div><div class='line' id='LC1672'><span class="cm">   * Example:</span></div><div class='line' id='LC1673'><span class="cm">   *</span></div><div class='line' id='LC1674'><span class="cm">   *     var socket = new io.Socket();</span></div><div class='line' id='LC1675'><span class="cm">   *     socket.on(&quot;custom:event&quot;, function(){</span></div><div class='line' id='LC1676'><span class="cm">   *       console.log(&quot;Emitted a custom:event&quot;);</span></div><div class='line' id='LC1677'><span class="cm">   *     });</span></div><div class='line' id='LC1678'><span class="cm">   *     socket.emit(&quot;custom:event&quot;);</span></div><div class='line' id='LC1679'><span class="cm">   *     // =&gt; &quot;Emitted a custom:event&quot;</span></div><div class='line' id='LC1680'><span class="cm">   *</span></div><div class='line' id='LC1681'><span class="cm">   * @param {String} name The name of the event.</span></div><div class='line' id='LC1682'><span class="cm">   * @param {Array} args Arguments for the event.</span></div><div class='line' id='LC1683'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1684'><span class="cm">   * @api private</span></div><div class='line' id='LC1685'><span class="cm">   */</span></div><div class='line' id='LC1686'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">emit</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">args</span><span class="p">){</span></div><div class='line' id='LC1687'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">){</span></div><div class='line' id='LC1688'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">concat</span><span class="p">();</span></div><div class='line' id='LC1689'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ii</span> <span class="o">=</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ii</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC1690'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="p">[]</span> <span class="o">:</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC1691'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1692'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1693'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1694'><br/></div><div class='line' id='LC1695'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1696'><span class="cm">   * Removes a event listener from the listener array for the specified event.</span></div><div class='line' id='LC1697'><span class="cm">   *</span></div><div class='line' id='LC1698'><span class="cm">   * Example:</span></div><div class='line' id='LC1699'><span class="cm">   *</span></div><div class='line' id='LC1700'><span class="cm">   *     var socket = new io.Socket()</span></div><div class='line' id='LC1701'><span class="cm">   *       , event = function(){};</span></div><div class='line' id='LC1702'><span class="cm">   *     socket.on(&quot;connect&quot;, event);</span></div><div class='line' id='LC1703'><span class="cm">   *     socket.removeEvent(&quot;connect&quot;, event);</span></div><div class='line' id='LC1704'><span class="cm">   *</span></div><div class='line' id='LC1705'><span class="cm">   * @param {String} name The name of the event.</span></div><div class='line' id='LC1706'><span class="cm">   * @param {Function} fn The function that is called once the event is emitted.</span></div><div class='line' id='LC1707'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1708'><span class="cm">   * @api public</span></div><div class='line' id='LC1709'><span class="cm">   */</span></div><div class='line' id='LC1710'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">){</span></div><div class='line' id='LC1711'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">){</span></div><div class='line' id='LC1712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">a</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC1713'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">][</span><span class="nx">a</span><span class="p">]</span> <span class="o">==</span> <span class="nx">fn</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">][</span><span class="nx">a</span><span class="p">].</span><span class="nx">ref</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">][</span><span class="nx">a</span><span class="p">].</span><span class="nx">ref</span> <span class="o">==</span> <span class="nx">fn</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">splice</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>    </div><div class='line' id='LC1714'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1715'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1716'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1717'>&nbsp;&nbsp;</div><div class='line' id='LC1718'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1719'><span class="cm">   * Queues messages when there isn&#39;t a active connection available. Once a connection has been</span></div><div class='line' id='LC1720'><span class="cm">   * established you should call the `doQueue` method to send the queued messages to the server.</span></div><div class='line' id='LC1721'><span class="cm">   *</span></div><div class='line' id='LC1722'><span class="cm">   * @param {Mixed} message The message that was originally send to the `send` method.</span></div><div class='line' id='LC1723'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1724'><span class="cm">   * @api private</span></div><div class='line' id='LC1725'><span class="cm">   */</span></div><div class='line' id='LC1726'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">queue</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">){</span></div><div class='line' id='LC1727'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;queueStack&#39;</span> <span class="k">in</span> <span class="k">this</span><span class="p">))</span> <span class="k">this</span><span class="p">.</span><span class="nx">queueStack</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1728'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">queueStack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC1729'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1730'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1731'>&nbsp;&nbsp;</div><div class='line' id='LC1732'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1733'><span class="cm">   * If there are queued messages we send all messages to the Socket.IO server and empty</span></div><div class='line' id='LC1734'><span class="cm">   * the queue.</span></div><div class='line' id='LC1735'><span class="cm">   *</span></div><div class='line' id='LC1736'><span class="cm">   * @returns {io.Socket}</span></div><div class='line' id='LC1737'><span class="cm">   * @api private</span></div><div class='line' id='LC1738'><span class="cm">   */</span></div><div class='line' id='LC1739'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">doQueue</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1740'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="s1">&#39;queueStack&#39;</span> <span class="k">in</span> <span class="k">this</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">queueStack</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1741'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">queueStack</span><span class="p">);</span></div><div class='line' id='LC1742'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">queueStack</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1743'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1744'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1745'>&nbsp;&nbsp;</div><div class='line' id='LC1746'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1747'><span class="cm">   * Check if we need to use cross domain enabled transports. Cross domain would</span></div><div class='line' id='LC1748'><span class="cm">   * be a different port or different domain name.</span></div><div class='line' id='LC1749'><span class="cm">   *</span></div><div class='line' id='LC1750'><span class="cm">   * @returns {Boolean}</span></div><div class='line' id='LC1751'><span class="cm">   * @api private</span></div><div class='line' id='LC1752'><span class="cm">   */</span></div><div class='line' id='LC1753'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isXDomain</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1754'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">locPort</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">port</span> <span class="o">||</span> <span class="mi">80</span><span class="p">;</span></div><div class='line' id='LC1755'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">host</span> <span class="o">!==</span> <span class="nb">document</span><span class="p">.</span><span class="nx">domain</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">port</span> <span class="o">!=</span> <span class="nx">locPort</span><span class="p">;</span></div><div class='line' id='LC1756'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1757'>&nbsp;&nbsp;</div><div class='line' id='LC1758'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1759'><span class="cm">   * When the transport established an working connection the Socket.IO server it notifies us</span></div><div class='line' id='LC1760'><span class="cm">   * by calling this method so we can set the `connected` and `connecting` properties and emit</span></div><div class='line' id='LC1761'><span class="cm">   * the connection event.</span></div><div class='line' id='LC1762'><span class="cm">   *</span></div><div class='line' id='LC1763'><span class="cm">   * @api private</span></div><div class='line' id='LC1764'><span class="cm">   */</span></div><div class='line' id='LC1765'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onConnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1766'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connected</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1767'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connecting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doQueue</span><span class="p">();</span></div><div class='line' id='LC1769'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">rememberTransport</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="s1">&#39;socketio=&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC1770'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;connect&#39;</span><span class="p">);</span></div><div class='line' id='LC1771'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1772'>&nbsp;&nbsp;</div><div class='line' id='LC1773'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1774'><span class="cm">   * When the transport receives new messages from the Socket.IO server it notifies us by calling</span></div><div class='line' id='LC1775'><span class="cm">   * this method with the decoded `data` it received.</span></div><div class='line' id='LC1776'><span class="cm">   *</span></div><div class='line' id='LC1777'><span class="cm">   * @param data The message from the Socket.IO server.</span></div><div class='line' id='LC1778'><span class="cm">   * @api private</span></div><div class='line' id='LC1779'><span class="cm">   */</span></div><div class='line' id='LC1780'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onMessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span></div><div class='line' id='LC1781'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;message&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">data</span><span class="p">]);</span></div><div class='line' id='LC1782'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1783'>&nbsp;&nbsp;</div><div class='line' id='LC1784'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1785'><span class="cm">   * When the transport is disconnected from the Socket.IO server it notifies us by calling</span></div><div class='line' id='LC1786'><span class="cm">   * this method. If we where connected and the `reconnect` is set we will attempt to reconnect.</span></div><div class='line' id='LC1787'><span class="cm">   *</span></div><div class='line' id='LC1788'><span class="cm">   * @api private</span></div><div class='line' id='LC1789'><span class="cm">   */</span></div><div class='line' id='LC1790'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onDisconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1791'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">wasConnected</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">connected</span><span class="p">;</span></div><div class='line' id='LC1792'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connected</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1793'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">connecting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1794'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">queueStack</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1795'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">wasConnected</span><span class="p">){</span></div><div class='line' id='LC1796'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;disconnect&#39;</span><span class="p">);</span></div><div class='line' id='LC1797'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">reconnect</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">reconnecting</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">onReconnect</span><span class="p">();</span></div><div class='line' id='LC1798'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1799'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1800'>&nbsp;&nbsp;</div><div class='line' id='LC1801'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1802'><span class="cm">   * The reconnection is done using an exponential back off algorithm to prevent</span></div><div class='line' id='LC1803'><span class="cm">   * the server from being flooded with connection requests. When the transport</span></div><div class='line' id='LC1804'><span class="cm">   * is disconnected we wait until the `reconnectionDelay` finishes. We multiply </span></div><div class='line' id='LC1805'><span class="cm">   * the `reconnectionDelay` (if the previous `reconnectionDelay` was 500 it will</span></div><div class='line' id='LC1806'><span class="cm">   * be updated to 1000 and than 2000&gt;4000&gt;8000&gt;16000 etc.) and tell the current</span></div><div class='line' id='LC1807'><span class="cm">   * transport to connect again. When we run out of `reconnectionAttempts` we will </span></div><div class='line' id='LC1808'><span class="cm">   * do one final attempt and loop over all enabled transport methods to see if </span></div><div class='line' id='LC1809'><span class="cm">   * other transports might work. If everything fails we emit the `reconnect_failed`</span></div><div class='line' id='LC1810'><span class="cm">   * event.</span></div><div class='line' id='LC1811'><span class="cm">   *</span></div><div class='line' id='LC1812'><span class="cm">   * @api private</span></div><div class='line' id='LC1813'><span class="cm">   */</span></div><div class='line' id='LC1814'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onReconnect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC1815'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">reconnecting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1816'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">reconnectionAttempts</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1817'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">reconnectionDelay</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">reconnectionDelay</span><span class="p">;</span></div><div class='line' id='LC1818'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1819'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC1820'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">tryTransportsOnConnectTimeout</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tryTransportsOnConnectTimeout</span></div><div class='line' id='LC1821'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">rememberTransport</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">rememberTransport</span><span class="p">;</span></div><div class='line' id='LC1822'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1823'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">reset</span><span class="p">(){</span></div><div class='line' id='LC1824'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">connected</span><span class="p">)</span> <span class="nx">self</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;reconnect&#39;</span><span class="p">,[</span><span class="nx">self</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span><span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionAttempts</span><span class="p">]);</span></div><div class='line' id='LC1825'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">removeEvent</span><span class="p">(</span><span class="s1">&#39;connect_failed&#39;</span><span class="p">,</span> <span class="nx">maybeReconnect</span><span class="p">).</span><span class="nx">removeEvent</span><span class="p">(</span><span class="s1">&#39;connect&#39;</span><span class="p">,</span> <span class="nx">maybeReconnect</span><span class="p">);</span></div><div class='line' id='LC1826'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">reconnecting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1827'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionAttempts</span><span class="p">;</span></div><div class='line' id='LC1828'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionDelay</span><span class="p">;</span></div><div class='line' id='LC1829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionTimer</span><span class="p">;</span></div><div class='line' id='LC1830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">self</span><span class="p">.</span><span class="nx">redoTransports</span><span class="p">;</span></div><div class='line' id='LC1831'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tryTransportsOnConnectTimeout</span> <span class="o">=</span> <span class="nx">tryTransportsOnConnectTimeout</span><span class="p">;</span></div><div class='line' id='LC1832'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">rememberTransport</span> <span class="o">=</span> <span class="nx">rememberTransport</span><span class="p">;</span></div><div class='line' id='LC1833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1834'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1835'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1836'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1837'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">maybeReconnect</span><span class="p">(){</span></div><div class='line' id='LC1838'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">reconnecting</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1839'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">connected</span><span class="p">){</span></div><div class='line' id='LC1840'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">connecting</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">reconnecting</span><span class="p">)</span> <span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionTimer</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">maybeReconnect</span><span class="p">,</span> <span class="mi">1000</span><span class="p">);</span></div><div class='line' id='LC1841'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1842'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionAttempts</span><span class="o">++</span> <span class="o">&gt;=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">maxReconnectionAttempts</span><span class="p">){</span></div><div class='line' id='LC1843'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">redoTransports</span><span class="p">){</span></div><div class='line' id='LC1844'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;connect_failed&#39;</span><span class="p">,</span> <span class="nx">maybeReconnect</span><span class="p">);</span></div><div class='line' id='LC1845'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tryTransportsOnConnectTimeout</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1846'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">transport</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">getTransport</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">transports</span><span class="p">);</span> <span class="c1">// override with all enabled transports</span></div><div class='line' id='LC1847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">redoTransports</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1848'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">connect</span><span class="p">();</span></div><div class='line' id='LC1849'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;reconnect_failed&#39;</span><span class="p">);</span></div><div class='line' id='LC1851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC1852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionDelay</span> <span class="o">*=</span> <span class="mi">2</span><span class="p">;</span> <span class="c1">// exponential back off</span></div><div class='line' id='LC1855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">connect</span><span class="p">();</span></div><div class='line' id='LC1856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;reconnecting&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionDelay</span><span class="p">,</span><span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionAttempts</span><span class="p">]);</span></div><div class='line' id='LC1857'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionTimer</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">maybeReconnect</span><span class="p">,</span> <span class="nx">self</span><span class="p">.</span><span class="nx">reconnectionDelay</span><span class="p">);</span></div><div class='line' id='LC1858'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1859'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1860'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC1861'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1862'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1863'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">tryTransportsOnConnectTimeout</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1864'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">reconnectionTimer</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">maybeReconnect</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">reconnectionDelay</span><span class="p">);</span></div><div class='line' id='LC1865'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1866'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;connect&#39;</span><span class="p">,</span> <span class="nx">maybeReconnect</span><span class="p">);</span></div><div class='line' id='LC1867'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1868'>&nbsp;&nbsp;</div><div class='line' id='LC1869'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1870'><span class="cm">   * API compatiblity</span></div><div class='line' id='LC1871'><span class="cm">   */</span></div><div class='line' id='LC1872'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">fire</span> <span class="o">=</span> <span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">emit</span><span class="p">;</span></div><div class='line' id='LC1873'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addListener</span> <span class="o">=</span> <span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addEvent</span> <span class="o">=</span> <span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">=</span> <span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">on</span><span class="p">;</span></div><div class='line' id='LC1874'>&nbsp;&nbsp;<span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeListener</span> <span class="o">=</span> <span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeEventListener</span> <span class="o">=</span> <span class="nx">Socket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeEvent</span><span class="p">;</span></div><div class='line' id='LC1875'>&nbsp;&nbsp;</div><div class='line' id='LC1876'><span class="p">})();</span></div><div class='line' id='LC1877'><span class="cm">/*	SWFObject v2.2 &lt;http://code.google.com/p/swfobject/&gt; </span></div><div class='line' id='LC1878'><span class="cm">	is released under the MIT License &lt;http://www.opensource.org/licenses/mit-license.php&gt; </span></div><div class='line' id='LC1879'><span class="cm">*/</span></div><div class='line' id='LC1880'><span class="kd">var</span> <span class="nx">swfobject</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">D</span><span class="o">=</span><span class="s2">&quot;undefined&quot;</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="s2">&quot;object&quot;</span><span class="p">,</span><span class="nx">S</span><span class="o">=</span><span class="s2">&quot;Shockwave Flash&quot;</span><span class="p">,</span><span class="nx">W</span><span class="o">=</span><span class="s2">&quot;ShockwaveFlash.ShockwaveFlash&quot;</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="s2">&quot;application/x-shockwave-flash&quot;</span><span class="p">,</span><span class="nx">R</span><span class="o">=</span><span class="s2">&quot;SWFObjectExprInst&quot;</span><span class="p">,</span><span class="nx">x</span><span class="o">=</span><span class="s2">&quot;onreadystatechange&quot;</span><span class="p">,</span><span class="nx">O</span><span class="o">=</span><span class="nb">window</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nb">document</span><span class="p">,</span><span class="nx">t</span><span class="o">=</span><span class="nx">navigator</span><span class="p">,</span><span class="nx">T</span><span class="o">=</span><span class="kc">false</span><span class="p">,</span><span class="nx">U</span><span class="o">=</span><span class="p">[</span><span class="nx">h</span><span class="p">],</span><span class="nx">o</span><span class="o">=</span><span class="p">[],</span><span class="nx">N</span><span class="o">=</span><span class="p">[],</span><span class="nx">I</span><span class="o">=</span><span class="p">[],</span><span class="nx">l</span><span class="p">,</span><span class="nx">Q</span><span class="p">,</span><span class="nx">E</span><span class="p">,</span><span class="nx">B</span><span class="p">,</span><span class="nx">J</span><span class="o">=</span><span class="kc">false</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="kc">false</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">G</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="kc">true</span><span class="p">,</span><span class="nx">M</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">getElementById</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">createElement</span><span class="o">!=</span><span class="nx">D</span><span class="p">,</span><span class="nx">ah</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">Y</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">platform</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">ae</span><span class="o">=</span><span class="nx">Y</span><span class="o">?</span><span class="sr">/win/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">:</span><span class="sr">/win/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ah</span><span class="p">),</span><span class="nx">ac</span><span class="o">=</span><span class="nx">Y</span><span class="o">?</span><span class="sr">/mac/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">:</span><span class="sr">/mac/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ah</span><span class="p">),</span><span class="nx">af</span><span class="o">=</span><span class="sr">/webkit/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ah</span><span class="p">)</span><span class="o">?</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">ah</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*webkit\/(\d+(\.\d+)?).*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">))</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">X</span><span class="o">=!+</span><span class="s2">&quot;\v1&quot;</span><span class="p">,</span><span class="nx">ag</span><span class="o">=</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span><span class="nx">ab</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">.</span><span class="nx">plugins</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="nx">S</span><span class="p">]</span><span class="o">==</span><span class="nx">r</span><span class="p">){</span><span class="nx">ab</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="nx">S</span><span class="p">].</span><span class="nx">description</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">t</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="nx">q</span><span class="p">]</span><span class="o">&amp;&amp;!</span><span class="nx">t</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="nx">q</span><span class="p">].</span><span class="nx">enabledPlugin</span><span class="p">)){</span><span class="nx">T</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">X</span><span class="o">=</span><span class="kc">false</span><span class="p">;</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*\s+(\S+\s+\S+$)/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">);</span><span class="nx">ag</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.*)\..*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">);</span><span class="nx">ag</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*\.(.*)\s.*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">);</span><span class="nx">ag</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">=</span><span class="sr">/[a-zA-Z]/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">ab</span><span class="p">)</span><span class="o">?</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*[a-zA-Z]+(.*)$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">)</span><span class="o">:</span><span class="mi">0</span><span class="p">}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">ActiveXObject</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="k">try</span><span class="p">{</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="nx">W</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ad</span><span class="p">){</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ad</span><span class="p">.</span><span class="nx">GetVariable</span><span class="p">(</span><span class="s2">&quot;$version&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">X</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">);</span><span class="nx">ag</span><span class="o">=</span><span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)]}}}</span><span class="k">catch</span><span class="p">(</span><span class="nx">Z</span><span class="p">){}}}</span><span class="k">return</span><span class="p">{</span><span class="nx">w3</span><span class="o">:</span><span class="nx">aa</span><span class="p">,</span><span class="nx">pv</span><span class="o">:</span><span class="nx">ag</span><span class="p">,</span><span class="nx">wk</span><span class="o">:</span><span class="nx">af</span><span class="p">,</span><span class="nx">ie</span><span class="o">:</span><span class="nx">X</span><span class="p">,</span><span class="nx">win</span><span class="o">:</span><span class="nx">ae</span><span class="p">,</span><span class="nx">mac</span><span class="o">:</span><span class="nx">ac</span><span class="p">}}(),</span><span class="nx">k</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">((</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="s2">&quot;complete&quot;</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">||</span><span class="nx">j</span><span class="p">.</span><span class="nx">body</span><span class="p">))){</span><span class="nx">f</span><span class="p">()}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">J</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="s2">&quot;complete&quot;</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">);</span><span class="nx">f</span><span class="p">()}});</span><span class="k">if</span><span class="p">(</span><span class="nx">O</span><span class="o">==</span><span class="nx">top</span><span class="p">){(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">try</span><span class="p">{</span><span class="nx">j</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">(</span><span class="s2">&quot;left&quot;</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">0</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="nx">f</span><span class="p">()})()}}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="p">){(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="sr">/loaded|complete/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)){</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">0</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="nx">f</span><span class="p">()})()}</span><span class="nx">s</span><span class="p">(</span><span class="nx">f</span><span class="p">)}}();</span><span class="kd">function</span> <span class="nx">f</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="k">try</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;span&quot;</span><span class="p">));</span><span class="nx">Z</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">Z</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="nx">J</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">U</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">Y</span><span class="o">&lt;</span><span class="nx">X</span><span class="p">;</span><span class="nx">Y</span><span class="o">++</span><span class="p">){</span><span class="nx">U</span><span class="p">[</span><span class="nx">Y</span><span class="p">]()}}</span><span class="kd">function</span> <span class="nx">K</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">){</span><span class="nx">X</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="nx">U</span><span class="p">[</span><span class="nx">U</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="nx">X</span><span class="p">}}</span><span class="kd">function</span> <span class="nx">s</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">O</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">attachEvent</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">i</span><span class="p">(</span><span class="nx">O</span><span class="p">,</span><span class="s2">&quot;onload&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="p">;</span><span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">X</span><span class="p">();</span><span class="nx">Y</span><span class="p">()}}</span><span class="k">else</span><span class="p">{</span><span class="nx">O</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="nx">Y</span><span class="p">}}}}}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">T</span><span class="p">){</span><span class="nx">V</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="nx">H</span><span class="p">()}}</span><span class="kd">function</span> <span class="nx">V</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span><span class="nx">aa</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">,</span><span class="nx">q</span><span class="p">);</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">X</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">aa</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="mi">0</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Z</span><span class="p">.</span><span class="nx">GetVariable</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ab</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">GetVariable</span><span class="p">(</span><span class="s2">&quot;$version&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">ab</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">);</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="o">=</span><span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">ab</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)]}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="o">&lt;</span><span class="mi">10</span><span class="p">){</span><span class="nx">Y</span><span class="o">++</span><span class="p">;</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span><span class="k">return</span><span class="p">}}</span><span class="nx">X</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">aa</span><span class="p">);</span><span class="nx">Z</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">H</span><span class="p">()})()}</span><span class="k">else</span><span class="p">{</span><span class="nx">H</span><span class="p">()}}</span><span class="kd">function</span> <span class="nx">H</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">ag</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ag</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">af</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">af</span><span class="o">&lt;</span><span class="nx">ag</span><span class="p">;</span><span class="nx">af</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">id</span><span class="p">;</span><span class="kd">var</span> <span class="nx">ab</span><span class="o">=</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">callbackFn</span><span class="p">;</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="p">{</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">Y</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ae</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">F</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">swfVersion</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)){</span><span class="nx">w</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">success</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">aa</span><span class="p">.</span><span class="nx">ref</span><span class="o">=</span><span class="nx">z</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="nx">ab</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">expressInstall</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">()){</span><span class="kd">var</span> <span class="nx">ai</span><span class="o">=</span><span class="p">{};</span><span class="nx">ai</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">o</span><span class="p">[</span><span class="nx">af</span><span class="p">].</span><span class="nx">expressInstall</span><span class="p">;</span><span class="nx">ai</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;width&quot;</span><span class="p">)</span><span class="o">||</span><span class="s2">&quot;0&quot;</span><span class="p">;</span><span class="nx">ai</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">)</span><span class="o">||</span><span class="s2">&quot;0&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">)){</span><span class="nx">ai</span><span class="p">.</span><span class="nx">styleclass</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;align&quot;</span><span class="p">)){</span><span class="nx">ai</span><span class="p">.</span><span class="nx">align</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;align&quot;</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">ah</span><span class="o">=</span><span class="p">{};</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">ae</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;param&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">ac</span><span class="o">=</span><span class="nx">X</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">ad</span><span class="o">&lt;</span><span class="nx">ac</span><span class="p">;</span><span class="nx">ad</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="nx">ad</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;movie&quot;</span><span class="p">){</span><span class="nx">ah</span><span class="p">[</span><span class="nx">X</span><span class="p">[</span><span class="nx">ad</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">)]</span><span class="o">=</span><span class="nx">X</span><span class="p">[</span><span class="nx">ad</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;value&quot;</span><span class="p">)}}</span><span class="nx">P</span><span class="p">(</span><span class="nx">ai</span><span class="p">,</span><span class="nx">ah</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">ab</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">p</span><span class="p">(</span><span class="nx">ae</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">ab</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}}}}}</span><span class="k">else</span><span class="p">{</span><span class="nx">w</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">z</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">Z</span><span class="p">.</span><span class="nx">SetVariable</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">success</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">aa</span><span class="p">.</span><span class="nx">ref</span><span class="o">=</span><span class="nx">Z</span><span class="p">}</span><span class="nx">ab</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}}}}}</span><span class="kd">function</span> <span class="nx">z</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">aa</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;OBJECT&quot;</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Y</span><span class="p">.</span><span class="nx">SetVariable</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">X</span><span class="o">=</span><span class="nx">Y</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">Y</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="nx">r</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">}}}</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="kd">function</span> <span class="nx">A</span><span class="p">(){</span><span class="k">return</span> <span class="o">!</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">F</span><span class="p">(</span><span class="s2">&quot;6.0.65&quot;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">||</span><span class="nx">M</span><span class="p">.</span><span class="nx">mac</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">P</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">ab</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Z</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">E</span><span class="o">=</span><span class="nx">Z</span><span class="o">||</span><span class="kc">null</span><span class="p">;</span><span class="nx">B</span><span class="o">=</span><span class="p">{</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">X</span><span class="p">};</span><span class="kd">var</span> <span class="nx">ae</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">X</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;OBJECT&quot;</span><span class="p">){</span><span class="nx">l</span><span class="o">=</span><span class="nx">g</span><span class="p">(</span><span class="nx">ae</span><span class="p">);</span><span class="nx">Q</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">l</span><span class="o">=</span><span class="nx">ae</span><span class="p">;</span><span class="nx">Q</span><span class="o">=</span><span class="nx">X</span><span class="p">}</span><span class="nx">aa</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">R</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="o">==</span><span class="nx">D</span><span class="o">||</span><span class="p">(</span><span class="o">!</span><span class="sr">/%$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span><span class="mi">10</span><span class="p">)</span><span class="o">&lt;</span><span class="mi">310</span><span class="p">)){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="s2">&quot;310&quot;</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="o">==</span><span class="nx">D</span><span class="o">||</span><span class="p">(</span><span class="o">!</span><span class="sr">/%$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span><span class="mi">10</span><span class="p">)</span><span class="o">&lt;</span><span class="mi">137</span><span class="p">)){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="s2">&quot;137&quot;</span><span class="p">}</span><span class="nx">j</span><span class="p">.</span><span class="nx">title</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">title</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">47</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot; - Flash Player Installation&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">?</span><span class="s2">&quot;ActiveX&quot;</span><span class="o">:</span><span class="s2">&quot;PlugIn&quot;</span><span class="p">,</span><span class="nx">ac</span><span class="o">=</span><span class="s2">&quot;MMredirectURL=&quot;</span><span class="o">+</span><span class="nx">O</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span><span class="s2">&quot;%26&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;&amp;MMplayerType=&quot;</span><span class="o">+</span><span class="nx">ad</span><span class="o">+</span><span class="s2">&quot;&amp;MMdoctitle=&quot;</span><span class="o">+</span><span class="nx">j</span><span class="p">.</span><span class="nx">title</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">ab</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">ab</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">+=</span><span class="s2">&quot;&amp;&quot;</span><span class="o">+</span><span class="nx">ac</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">ab</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">=</span><span class="nx">ac</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="nx">ae</span><span class="p">.</span><span class="nx">readyState</span><span class="o">!=</span><span class="mi">4</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">X</span><span class="o">+=</span><span class="s2">&quot;SWFObjectNew&quot;</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="nx">ae</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">Y</span><span class="p">,</span><span class="nx">ae</span><span class="p">);</span><span class="nx">ae</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="mi">4</span><span class="p">){</span><span class="nx">ae</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">ae</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">)}})()}</span><span class="nx">u</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">ab</span><span class="p">,</span><span class="nx">X</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">p</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">readyState</span><span class="o">!=</span><span class="mi">4</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">);</span><span class="nx">X</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">g</span><span class="p">(</span><span class="nx">Y</span><span class="p">),</span><span class="nx">X</span><span class="p">);</span><span class="nx">Y</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="mi">4</span><span class="p">){</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">Y</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">)}})()}</span><span class="k">else</span><span class="p">{</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">g</span><span class="p">(</span><span class="nx">Y</span><span class="p">),</span><span class="nx">Y</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="p">){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">innerHTML</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">ab</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="nx">r</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ad</span><span class="o">=</span><span class="nx">Y</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ad</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">ad</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">Z</span><span class="o">&lt;</span><span class="nx">X</span><span class="p">;</span><span class="nx">Z</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">nodeType</span><span class="o">==</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;PARAM&quot;</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">nodeType</span><span class="o">==</span><span class="mi">8</span><span class="p">)){</span><span class="nx">aa</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">ad</span><span class="p">[</span><span class="nx">Z</span><span class="p">].</span><span class="nx">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">))}}}}}</span><span class="k">return</span> <span class="nx">aa</span><span class="p">}</span><span class="kd">function</span> <span class="nx">u</span><span class="p">(</span><span class="nx">ai</span><span class="p">,</span><span class="nx">ag</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="p">,</span><span class="nx">aa</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">){</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="o">==</span><span class="nx">D</span><span class="p">){</span><span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">Y</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="kd">var</span> <span class="nx">ah</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ae</span> <span class="k">in</span> <span class="nx">ai</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ae</span><span class="p">]){</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;data&quot;</span><span class="p">){</span><span class="nx">ag</span><span class="p">.</span><span class="nx">movie</span><span class="o">=</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;styleclass&quot;</span><span class="p">){</span><span class="nx">ah</span><span class="o">+=</span><span class="s1">&#39; class=&quot;&#39;</span><span class="o">+</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ae</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;classid&quot;</span><span class="p">){</span><span class="nx">ah</span><span class="o">+=</span><span class="s2">&quot; &quot;</span><span class="o">+</span><span class="nx">ae</span><span class="o">+</span><span class="s1">&#39;=&quot;&#39;</span><span class="o">+</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ae</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">}}}}}</span><span class="kd">var</span> <span class="nx">af</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ad</span> <span class="k">in</span> <span class="nx">ag</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ad</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ad</span><span class="p">]){</span><span class="nx">af</span><span class="o">+=</span><span class="s1">&#39;&lt;param name=&quot;&#39;</span><span class="o">+</span><span class="nx">ad</span><span class="o">+</span><span class="s1">&#39;&quot; value=&quot;&#39;</span><span class="o">+</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ad</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">}}</span><span class="nx">aa</span><span class="p">.</span><span class="nx">outerHTML</span><span class="o">=</span><span class="s1">&#39;&lt;object classid=&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;&#39;</span><span class="o">+</span><span class="nx">ah</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">af</span><span class="o">+</span><span class="s2">&quot;&lt;/object&gt;&quot;</span><span class="p">;</span><span class="nx">N</span><span class="p">[</span><span class="nx">N</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span><span class="nx">X</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">ai</span><span class="p">.</span><span class="nx">id</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">,</span><span class="nx">q</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ac</span> <span class="k">in</span> <span class="nx">ai</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ac</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ac</span><span class="p">]){</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;styleclass&quot;</span><span class="p">){</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ac</span><span class="p">])}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;classid&quot;</span><span class="p">){</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">ac</span><span class="p">,</span><span class="nx">ai</span><span class="p">[</span><span class="nx">ac</span><span class="p">])}}}}</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ab</span> <span class="k">in</span> <span class="nx">ag</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ab</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">ab</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">ab</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;movie&quot;</span><span class="p">){</span><span class="nx">e</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">ab</span><span class="p">,</span><span class="nx">ag</span><span class="p">[</span><span class="nx">ab</span><span class="p">])}}</span><span class="nx">aa</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">aa</span><span class="p">);</span><span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">}}</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="kd">function</span> <span class="nx">e</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;param&quot;</span><span class="p">);</span><span class="nx">aa</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="nx">aa</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;value&quot;</span><span class="p">,</span><span class="nx">Y</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">aa</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">y</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Y</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="o">&amp;&amp;</span><span class="nx">X</span><span class="p">.</span><span class="nx">nodeName</span><span class="o">==</span><span class="s2">&quot;OBJECT&quot;</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nx">X</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="mi">4</span><span class="p">){</span><span class="nx">b</span><span class="p">(</span><span class="nx">Y</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">,</span><span class="mi">10</span><span class="p">)}})()}</span><span class="k">else</span><span class="p">{</span><span class="nx">X</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">X</span><span class="p">)}}}</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span> <span class="k">in</span> <span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="p">){</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}}</span><span class="nx">Y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">Y</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="nx">X</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">Z</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">Y</span><span class="p">){}</span><span class="k">return</span> <span class="nx">X</span><span class="p">}</span><span class="kd">function</span> <span class="nx">C</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">return</span> <span class="nx">j</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">X</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">i</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="nx">Z</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">);</span><span class="nx">I</span><span class="p">[</span><span class="nx">I</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="p">[</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">]}</span><span class="kd">function</span> <span class="nx">F</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">,</span><span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">);</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">)</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="nx">X</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">X</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="k">return</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&gt;</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">&gt;</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span><span class="o">||</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">X</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">==</span><span class="nx">X</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">&gt;=</span><span class="nx">X</span><span class="p">[</span><span class="mi">2</span><span class="p">]))</span><span class="o">?</span><span class="kc">true</span><span class="o">:</span><span class="kc">false</span><span class="p">}</span><span class="kd">function</span> <span class="nx">v</span><span class="p">(</span><span class="nx">ac</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">ad</span><span class="p">,</span><span class="nx">ab</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">mac</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">aa</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="p">(</span><span class="nx">ad</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">ad</span><span class="o">==</span><span class="s2">&quot;string&quot;</span><span class="p">)</span><span class="o">?</span><span class="nx">ad</span><span class="o">:</span><span class="s2">&quot;screen&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">ab</span><span class="p">){</span><span class="nx">n</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">G</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">n</span><span class="o">||</span><span class="nx">G</span><span class="o">!=</span><span class="nx">X</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">C</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">,</span><span class="s2">&quot;text/css&quot;</span><span class="p">);</span><span class="nx">Z</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;media&quot;</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="nx">n</span><span class="o">=</span><span class="nx">aa</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">Z</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="o">!=</span><span class="nx">D</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">){</span><span class="nx">n</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="p">[</span><span class="nx">j</span><span class="p">.</span><span class="nx">styleSheets</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]}</span><span class="nx">G</span><span class="o">=</span><span class="nx">X</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">n</span><span class="p">.</span><span class="nx">addRule</span><span class="o">==</span><span class="nx">r</span><span class="p">){</span><span class="nx">n</span><span class="p">.</span><span class="nx">addRule</span><span class="p">(</span><span class="nx">ac</span><span class="p">,</span><span class="nx">Y</span><span class="p">)}}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">createTextNode</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">n</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">ac</span><span class="o">+</span><span class="s2">&quot; {&quot;</span><span class="o">+</span><span class="nx">Y</span><span class="o">+</span><span class="s2">&quot;}&quot;</span><span class="p">))}}}</span><span class="kd">function</span> <span class="nx">w</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">m</span><span class="p">){</span><span class="k">return</span><span class="p">}</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">X</span><span class="o">?</span><span class="s2">&quot;visible&quot;</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">)){</span><span class="nx">c</span><span class="p">(</span><span class="nx">Z</span><span class="p">).</span><span class="nx">style</span><span class="p">.</span><span class="nx">visibility</span><span class="o">=</span><span class="nx">Y</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">v</span><span class="p">(</span><span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">Z</span><span class="p">,</span><span class="s2">&quot;visibility:&quot;</span><span class="o">+</span><span class="nx">Y</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">L</span><span class="p">(</span><span class="nx">Y</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="sr">/[\\\&quot;&lt;&gt;\.;]/</span><span class="p">;</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">!=</span><span class="kc">null</span><span class="p">;</span><span class="k">return</span> <span class="nx">X</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nb">encodeURIComponent</span><span class="o">!=</span><span class="nx">D</span><span class="o">?</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">Y</span><span class="p">)</span><span class="o">:</span><span class="nx">Y</span><span class="p">}</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onunload&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">ac</span><span class="o">=</span><span class="nx">I</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ab</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">ab</span><span class="o">&lt;</span><span class="nx">ac</span><span class="p">;</span><span class="nx">ab</span><span class="o">++</span><span class="p">){</span><span class="nx">I</span><span class="p">[</span><span class="nx">ab</span><span class="p">][</span><span class="mi">0</span><span class="p">].</span><span class="nx">detachEvent</span><span class="p">(</span><span class="nx">I</span><span class="p">[</span><span class="nx">ab</span><span class="p">][</span><span class="mi">1</span><span class="p">],</span><span class="nx">I</span><span class="p">[</span><span class="nx">ab</span><span class="p">][</span><span class="mi">2</span><span class="p">])}</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">N</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">aa</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">aa</span><span class="o">&lt;</span><span class="nx">Z</span><span class="p">;</span><span class="nx">aa</span><span class="o">++</span><span class="p">){</span><span class="nx">y</span><span class="p">(</span><span class="nx">N</span><span class="p">[</span><span class="nx">aa</span><span class="p">])}</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">Y</span> <span class="k">in</span> <span class="nx">M</span><span class="p">){</span><span class="nx">M</span><span class="p">[</span><span class="nx">Y</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="nx">M</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span> <span class="k">in</span> <span class="nx">swfobject</span><span class="p">){</span><span class="nx">swfobject</span><span class="p">[</span><span class="nx">X</span><span class="p">]</span><span class="o">=</span><span class="kc">null</span><span class="p">}</span><span class="nx">swfobject</span><span class="o">=</span><span class="kc">null</span><span class="p">})}}();</span><span class="k">return</span><span class="p">{</span><span class="nx">registerObject</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">ab</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="o">&amp;&amp;</span><span class="nx">ab</span><span class="o">&amp;&amp;</span><span class="nx">X</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="p">{};</span><span class="nx">Y</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">ab</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">swfVersion</span><span class="o">=</span><span class="nx">X</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">expressInstall</span><span class="o">=</span><span class="nx">aa</span><span class="p">;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">callbackFn</span><span class="o">=</span><span class="nx">Z</span><span class="p">;</span><span class="nx">o</span><span class="p">[</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span><span class="o">=</span><span class="nx">Y</span><span class="p">;</span><span class="nx">w</span><span class="p">(</span><span class="nx">ab</span><span class="p">,</span><span class="kc">false</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="nx">Z</span><span class="p">({</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">ab</span><span class="p">})}}},</span><span class="nx">getObjectById</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="k">return</span> <span class="nx">z</span><span class="p">(</span><span class="nx">X</span><span class="p">)}},</span><span class="nx">embedSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">ab</span><span class="p">,</span><span class="nx">ah</span><span class="p">,</span><span class="nx">ae</span><span class="p">,</span><span class="nx">ag</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">,</span><span class="nx">ad</span><span class="p">,</span><span class="nx">af</span><span class="p">,</span><span class="nx">ac</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="p">{</span><span class="nx">success</span><span class="o">:</span><span class="kc">false</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">ah</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">ab</span><span class="o">&amp;&amp;</span><span class="nx">ah</span><span class="o">&amp;&amp;</span><span class="nx">ae</span><span class="o">&amp;&amp;</span><span class="nx">ag</span><span class="o">&amp;&amp;</span><span class="nx">Y</span><span class="p">){</span><span class="nx">w</span><span class="p">(</span><span class="nx">ah</span><span class="p">,</span><span class="kc">false</span><span class="p">);</span><span class="nx">K</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">ae</span><span class="o">+=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">ag</span><span class="o">+=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">aj</span><span class="o">=</span><span class="p">{};</span><span class="k">if</span><span class="p">(</span><span class="nx">af</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">af</span><span class="o">===</span><span class="nx">r</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">al</span> <span class="k">in</span> <span class="nx">af</span><span class="p">){</span><span class="nx">aj</span><span class="p">[</span><span class="nx">al</span><span class="p">]</span><span class="o">=</span><span class="nx">af</span><span class="p">[</span><span class="nx">al</span><span class="p">]}}</span><span class="nx">aj</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">ab</span><span class="p">;</span><span class="nx">aj</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">ae</span><span class="p">;</span><span class="nx">aj</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">ag</span><span class="p">;</span><span class="kd">var</span> <span class="nx">am</span><span class="o">=</span><span class="p">{};</span><span class="k">if</span><span class="p">(</span><span class="nx">ad</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">ad</span><span class="o">===</span><span class="nx">r</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ak</span> <span class="k">in</span> <span class="nx">ad</span><span class="p">){</span><span class="nx">am</span><span class="p">[</span><span class="nx">ak</span><span class="p">]</span><span class="o">=</span><span class="nx">ad</span><span class="p">[</span><span class="nx">ak</span><span class="p">]}}</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">Z</span><span class="o">===</span><span class="nx">r</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">ai</span> <span class="k">in</span> <span class="nx">Z</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">am</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">!=</span><span class="nx">D</span><span class="p">){</span><span class="nx">am</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">+=</span><span class="s2">&quot;&amp;&quot;</span><span class="o">+</span><span class="nx">ai</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">Z</span><span class="p">[</span><span class="nx">ai</span><span class="p">]}</span><span class="k">else</span><span class="p">{</span><span class="nx">am</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">=</span><span class="nx">ai</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">Z</span><span class="p">[</span><span class="nx">ai</span><span class="p">]}}}</span><span class="k">if</span><span class="p">(</span><span class="nx">F</span><span class="p">(</span><span class="nx">Y</span><span class="p">)){</span><span class="kd">var</span> <span class="nx">an</span><span class="o">=</span><span class="nx">u</span><span class="p">(</span><span class="nx">aj</span><span class="p">,</span><span class="nx">am</span><span class="p">,</span><span class="nx">ah</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">aj</span><span class="p">.</span><span class="nx">id</span><span class="o">==</span><span class="nx">ah</span><span class="p">){</span><span class="nx">w</span><span class="p">(</span><span class="nx">ah</span><span class="p">,</span><span class="kc">true</span><span class="p">)}</span><span class="nx">X</span><span class="p">.</span><span class="nx">success</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">X</span><span class="p">.</span><span class="nx">ref</span><span class="o">=</span><span class="nx">an</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">aa</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">()){</span><span class="nx">aj</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">aa</span><span class="p">;</span><span class="nx">P</span><span class="p">(</span><span class="nx">aj</span><span class="p">,</span><span class="nx">am</span><span class="p">,</span><span class="nx">ah</span><span class="p">,</span><span class="nx">ac</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">w</span><span class="p">(</span><span class="nx">ah</span><span class="p">,</span><span class="kc">true</span><span class="p">)}}</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">){</span><span class="nx">ac</span><span class="p">(</span><span class="nx">X</span><span class="p">)}})}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">ac</span><span class="p">){</span><span class="nx">ac</span><span class="p">(</span><span class="nx">X</span><span class="p">)}}},</span><span class="nx">switchOffAutoHideShow</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="nx">m</span><span class="o">=</span><span class="kc">false</span><span class="p">},</span><span class="nx">ua</span><span class="o">:</span><span class="nx">M</span><span class="p">,</span><span class="nx">getFlashPlayerVersion</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="p">{</span><span class="nx">major</span><span class="o">:</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="nx">minor</span><span class="o">:</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="nx">release</span><span class="o">:</span><span class="nx">M</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">2</span><span class="p">]}},</span><span class="nx">hasFlashPlayerVersion</span><span class="o">:</span><span class="nx">F</span><span class="p">,</span><span class="nx">createSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="k">return</span> <span class="nx">u</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">return</span> <span class="kc">undefined</span><span class="p">}},</span><span class="nx">showExpressInstall</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">()){</span><span class="nx">P</span><span class="p">(</span><span class="nx">Z</span><span class="p">,</span><span class="nx">aa</span><span class="p">,</span><span class="nx">X</span><span class="p">,</span><span class="nx">Y</span><span class="p">)}},</span><span class="nx">removeSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="nx">y</span><span class="p">(</span><span class="nx">X</span><span class="p">)}},</span><span class="nx">createCSS</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">w3</span><span class="p">){</span><span class="nx">v</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="nx">Z</span><span class="p">,</span><span class="nx">Y</span><span class="p">,</span><span class="nx">X</span><span class="p">)}},</span><span class="nx">addDomLoadEvent</span><span class="o">:</span><span class="nx">K</span><span class="p">,</span><span class="nx">addLoadEvent</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">getQueryParamValue</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">aa</span><span class="p">){</span><span class="kd">var</span> <span class="nx">Z</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="o">||</span><span class="nx">j</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">Z</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="sr">/\?/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">Z</span><span class="p">)){</span><span class="nx">Z</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">]}</span><span class="k">if</span><span class="p">(</span><span class="nx">aa</span><span class="o">==</span><span class="kc">null</span><span class="p">){</span><span class="k">return</span> <span class="nx">L</span><span class="p">(</span><span class="nx">Z</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">Y</span><span class="o">=</span><span class="nx">Z</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">X</span><span class="o">&lt;</span><span class="nx">Y</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">X</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">))</span><span class="o">==</span><span class="nx">aa</span><span class="p">){</span><span class="k">return</span> <span class="nx">L</span><span class="p">(</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">substring</span><span class="p">((</span><span class="nx">Y</span><span class="p">[</span><span class="nx">X</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">)))}}}</span><span class="k">return</span><span class="s2">&quot;&quot;</span><span class="p">},</span><span class="nx">expressInstallCallback</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">X</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">R</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">X</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">){</span><span class="nx">X</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span><span class="nx">X</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">Q</span><span class="p">){</span><span class="nx">w</span><span class="p">(</span><span class="nx">Q</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">M</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">M</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="nx">l</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">}}</span><span class="k">if</span><span class="p">(</span><span class="nx">E</span><span class="p">){</span><span class="nx">E</span><span class="p">(</span><span class="nx">B</span><span class="p">)}}</span><span class="nx">a</span><span class="o">=</span><span class="kc">false</span><span class="p">}}}}();</span></div><div class='line' id='LC1881'><span class="c1">// Copyright: Hiroshi Ichikawa &lt;http://gimite.net/en/&gt;</span></div><div class='line' id='LC1882'><span class="c1">// License: New BSD License</span></div><div class='line' id='LC1883'><span class="c1">// Reference: http://dev.w3.org/html5/websockets/</span></div><div class='line' id='LC1884'><span class="c1">// Reference: http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol</span></div><div class='line' id='LC1885'><br/></div><div class='line' id='LC1886'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1887'>&nbsp;&nbsp;</div><div class='line' id='LC1888'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">WebSocket</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1889'><br/></div><div class='line' id='LC1890'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">console</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">;</span></div><div class='line' id='LC1891'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">console</span> <span class="o">||</span> <span class="o">!</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span> <span class="o">||</span> <span class="o">!</span><span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1892'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span> <span class="o">=</span> <span class="p">{</span><span class="nx">log</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span> <span class="p">},</span> <span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span> <span class="p">}};</span></div><div class='line' id='LC1893'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1894'>&nbsp;&nbsp;</div><div class='line' id='LC1895'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">swfobject</span><span class="p">.</span><span class="nx">hasFlashPlayerVersion</span><span class="p">(</span><span class="s2">&quot;10.0.0&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1896'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;Flash Player &gt;= 10.0.0 is required.&quot;</span><span class="p">);</span></div><div class='line' id='LC1897'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1898'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1899'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">==</span> <span class="s2">&quot;file:&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1900'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span></div><div class='line' id='LC1901'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;WARNING: web-socket-js doesn&#39;t work in file:///... URL &quot;</span> <span class="o">+</span></div><div class='line' id='LC1902'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;unless you set Flash Security Settings properly. &quot;</span> <span class="o">+</span></div><div class='line' id='LC1903'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Open the page via Web server i.e. http://...&quot;</span><span class="p">);</span></div><div class='line' id='LC1904'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1905'><br/></div><div class='line' id='LC1906'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1907'><span class="cm">   * This class represents a faux web socket.</span></div><div class='line' id='LC1908'><span class="cm">   * @param {string} url</span></div><div class='line' id='LC1909'><span class="cm">   * @param {array or string} protocols</span></div><div class='line' id='LC1910'><span class="cm">   * @param {string} proxyHost</span></div><div class='line' id='LC1911'><span class="cm">   * @param {int} proxyPort</span></div><div class='line' id='LC1912'><span class="cm">   * @param {string} headers</span></div><div class='line' id='LC1913'><span class="cm">   */</span></div><div class='line' id='LC1914'>&nbsp;&nbsp;<span class="nx">WebSocket</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">protocols</span><span class="p">,</span> <span class="nx">proxyHost</span><span class="p">,</span> <span class="nx">proxyPort</span><span class="p">,</span> <span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1915'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1916'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">__id</span> <span class="o">=</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__nextId</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC1917'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__instances</span><span class="p">[</span><span class="nx">self</span><span class="p">.</span><span class="nx">__id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC1918'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">=</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CONNECTING</span><span class="p">;</span></div><div class='line' id='LC1919'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">bufferedAmount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1920'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">__events</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1921'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">protocols</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1922'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">protocols</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1923'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">protocols</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1924'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">protocols</span> <span class="o">=</span> <span class="p">[</span><span class="nx">protocols</span><span class="p">];</span></div><div class='line' id='LC1925'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1926'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.</span></div><div class='line' id='LC1927'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise, when onopen fires immediately, onopen is called before it is set.</span></div><div class='line' id='LC1928'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__addTask</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1930'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span></div><div class='line' id='LC1931'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">__id</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">protocols</span><span class="p">,</span> <span class="nx">proxyHost</span> <span class="o">||</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">proxyPort</span> <span class="o">||</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">headers</span> <span class="o">||</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1932'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1933'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1934'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1935'><br/></div><div class='line' id='LC1936'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1937'><span class="cm">   * Send data to the web socket.</span></div><div class='line' id='LC1938'><span class="cm">   * @param {string} data  The data to send to the socket.</span></div><div class='line' id='LC1939'><span class="cm">   * @return {boolean}  True for success, false for failure.</span></div><div class='line' id='LC1940'><span class="cm">   */</span></div><div class='line' id='LC1941'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1942'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CONNECTING</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1943'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;INVALID_STATE_ERR: Web Socket connection has not been established&quot;</span><span class="p">;</span></div><div class='line' id='LC1944'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1945'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// We use encodeURIComponent() here, because FABridge doesn&#39;t work if</span></div><div class='line' id='LC1946'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the argument includes some characters. We don&#39;t use escape() here</span></div><div class='line' id='LC1947'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// because of this:</span></div><div class='line' id='LC1948'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions</span></div><div class='line' id='LC1949'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// But it looks decodeURIComponent(encodeURIComponent(s)) doesn&#39;t</span></div><div class='line' id='LC1950'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// preserve all Unicode characters either e.g. &quot;\uffff&quot; in Firefox.</span></div><div class='line' id='LC1951'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require</span></div><div class='line' id='LC1952'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// additional testing.</span></div><div class='line' id='LC1953'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">__id</span><span class="p">,</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC1954'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// success</span></div><div class='line' id='LC1955'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1956'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1957'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bufferedAmount</span> <span class="o">+=</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC1958'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1959'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1960'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1961'><br/></div><div class='line' id='LC1962'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1963'><span class="cm">   * Close this web socket gracefully.</span></div><div class='line' id='LC1964'><span class="cm">   */</span></div><div class='line' id='LC1965'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">close</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1966'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CLOSED</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CLOSING</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1968'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1969'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">=</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CLOSING</span><span class="p">;</span></div><div class='line' id='LC1970'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">.</span><span class="nx">close</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">__id</span><span class="p">);</span></div><div class='line' id='LC1971'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1972'><br/></div><div class='line' id='LC1973'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1974'><span class="cm">   * Implementation of {@link &lt;a href=&quot;http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration&quot;&gt;DOM 2 EventTarget Interface&lt;/a&gt;}</span></div><div class='line' id='LC1975'><span class="cm">   *</span></div><div class='line' id='LC1976'><span class="cm">   * @param {string} type</span></div><div class='line' id='LC1977'><span class="cm">   * @param {function} listener</span></div><div class='line' id='LC1978'><span class="cm">   * @param {boolean} useCapture</span></div><div class='line' id='LC1979'><span class="cm">   * @return void</span></div><div class='line' id='LC1980'><span class="cm">   */</span></div><div class='line' id='LC1981'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">listener</span><span class="p">,</span> <span class="nx">useCapture</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1982'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">type</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">__events</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1983'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">__events</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1984'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1985'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">__events</span><span class="p">[</span><span class="nx">type</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">listener</span><span class="p">);</span></div><div class='line' id='LC1986'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1987'><br/></div><div class='line' id='LC1988'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1989'><span class="cm">   * Implementation of {@link &lt;a href=&quot;http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration&quot;&gt;DOM 2 EventTarget Interface&lt;/a&gt;}</span></div><div class='line' id='LC1990'><span class="cm">   *</span></div><div class='line' id='LC1991'><span class="cm">   * @param {string} type</span></div><div class='line' id='LC1992'><span class="cm">   * @param {function} listener</span></div><div class='line' id='LC1993'><span class="cm">   * @param {boolean} useCapture</span></div><div class='line' id='LC1994'><span class="cm">   * @return void</span></div><div class='line' id='LC1995'><span class="cm">   */</span></div><div class='line' id='LC1996'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeEventListener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">listener</span><span class="p">,</span> <span class="nx">useCapture</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1997'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">type</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">__events</span><span class="p">))</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1998'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">__events</span><span class="p">[</span><span class="nx">type</span><span class="p">];</span></div><div class='line' id='LC1999'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="o">--</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2000'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">listener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2001'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">events</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC2002'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC2003'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2004'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2005'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2006'><br/></div><div class='line' id='LC2007'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2008'><span class="cm">   * Implementation of {@link &lt;a href=&quot;http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration&quot;&gt;DOM 2 EventTarget Interface&lt;/a&gt;}</span></div><div class='line' id='LC2009'><span class="cm">   *</span></div><div class='line' id='LC2010'><span class="cm">   * @param {Event} event</span></div><div class='line' id='LC2011'><span class="cm">   * @return void</span></div><div class='line' id='LC2012'><span class="cm">   */</span></div><div class='line' id='LC2013'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">dispatchEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2014'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">__events</span><span class="p">[</span><span class="nx">event</span><span class="p">.</span><span class="nx">type</span><span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC2015'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2016'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">](</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC2017'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2018'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">handler</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s2">&quot;on&quot;</span> <span class="o">+</span> <span class="nx">event</span><span class="p">.</span><span class="nx">type</span><span class="p">];</span></div><div class='line' id='LC2019'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">handler</span><span class="p">)</span> <span class="nx">handler</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC2020'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2021'><br/></div><div class='line' id='LC2022'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2023'><span class="cm">   * Handles an event from Flash.</span></div><div class='line' id='LC2024'><span class="cm">   * @param {Object} flashEvent</span></div><div class='line' id='LC2025'><span class="cm">   */</span></div><div class='line' id='LC2026'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__handleEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">flashEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2027'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s2">&quot;readyState&quot;</span> <span class="k">in</span> <span class="nx">flashEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2028'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">=</span> <span class="nx">flashEvent</span><span class="p">.</span><span class="nx">readyState</span><span class="p">;</span></div><div class='line' id='LC2029'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2030'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s2">&quot;protocol&quot;</span> <span class="k">in</span> <span class="nx">flashEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2031'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">=</span> <span class="nx">flashEvent</span><span class="p">.</span><span class="nx">protocol</span><span class="p">;</span></div><div class='line' id='LC2032'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2033'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC2034'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">jsEvent</span><span class="p">;</span></div><div class='line' id='LC2035'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">flashEvent</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;open&quot;</span> <span class="o">||</span> <span class="nx">flashEvent</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;error&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2036'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">jsEvent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">__createSimpleEvent</span><span class="p">(</span><span class="nx">flashEvent</span><span class="p">.</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC2037'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">flashEvent</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;close&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2038'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO implement jsEvent.wasClean</span></div><div class='line' id='LC2039'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">jsEvent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">__createSimpleEvent</span><span class="p">(</span><span class="s2">&quot;close&quot;</span><span class="p">);</span></div><div class='line' id='LC2040'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">flashEvent</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s2">&quot;message&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2041'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">flashEvent</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC2042'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">jsEvent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">__createMessageEvent</span><span class="p">(</span><span class="s2">&quot;message&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC2043'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2044'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;unknown event type: &quot;</span> <span class="o">+</span> <span class="nx">flashEvent</span><span class="p">.</span><span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC2045'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2046'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC2047'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">jsEvent</span><span class="p">);</span></div><div class='line' id='LC2048'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2049'>&nbsp;&nbsp;</div><div class='line' id='LC2050'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__createSimpleEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2051'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2052'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">(</span><span class="s2">&quot;Event&quot;</span><span class="p">);</span></div><div class='line' id='LC2053'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">initEvent</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC2054'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">event</span><span class="p">;</span></div><div class='line' id='LC2055'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2056'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">bubbles</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">cancelable</span><span class="o">:</span> <span class="kc">false</span><span class="p">};</span></div><div class='line' id='LC2057'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2058'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2059'>&nbsp;&nbsp;</div><div class='line' id='LC2060'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">__createMessageEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2061'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">MessageEvent</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">opera</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2062'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">(</span><span class="s2">&quot;MessageEvent&quot;</span><span class="p">);</span></div><div class='line' id='LC2063'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">initMessageEvent</span><span class="p">(</span><span class="s2">&quot;message&quot;</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nb">window</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC2064'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">event</span><span class="p">;</span></div><div class='line' id='LC2065'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2066'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.</span></div><div class='line' id='LC2067'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">bubbles</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">cancelable</span><span class="o">:</span> <span class="kc">false</span><span class="p">};</span></div><div class='line' id='LC2068'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2069'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2070'>&nbsp;&nbsp;</div><div class='line' id='LC2071'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2072'><span class="cm">   * Define the WebSocket readyState enumeration.</span></div><div class='line' id='LC2073'><span class="cm">   */</span></div><div class='line' id='LC2074'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CONNECTING</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC2075'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">OPEN</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC2076'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CLOSING</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC2077'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">CLOSED</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC2078'><br/></div><div class='line' id='LC2079'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC2080'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__instances</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC2081'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__tasks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC2082'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__nextId</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC2083'>&nbsp;&nbsp;</div><div class='line' id='LC2084'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2085'><span class="cm">   * Load a new flash security policy file.</span></div><div class='line' id='LC2086'><span class="cm">   * @param {string} url</span></div><div class='line' id='LC2087'><span class="cm">   */</span></div><div class='line' id='LC2088'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">loadFlashPolicyFile</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">){</span></div><div class='line' id='LC2089'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__addTask</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2090'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">.</span><span class="nx">loadManualPolicyFile</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC2091'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2092'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2093'><br/></div><div class='line' id='LC2094'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2095'><span class="cm">   * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.</span></div><div class='line' id='LC2096'><span class="cm">   */</span></div><div class='line' id='LC2097'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__initialize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2098'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC2099'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC2100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__swfLocation</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// For backword compatibility.</span></div><div class='line' id='LC2102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">WEB_SOCKET_SWF_LOCATION</span> <span class="o">=</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__swfLocation</span><span class="p">;</span></div><div class='line' id='LC2103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">WEB_SOCKET_SWF_LOCATION</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf&quot;</span><span class="p">);</span></div><div class='line' id='LC2106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC2107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span></div><div class='line' id='LC2109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s2">&quot;webSocketContainer&quot;</span><span class="p">;</span></div><div class='line' id='LC2110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Hides Flash box. We cannot use display: none or visibility: hidden because it prevents</span></div><div class='line' id='LC2111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Flash from loading at least in IE. So we move it out of the screen at (-100, -100).</span></div><div class='line' id='LC2112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// But this even doesn&#39;t work with Flash Lite (e.g. in Droid Incredible). So with Flash</span></div><div class='line' id='LC2113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is</span></div><div class='line' id='LC2114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the best we can do as far as we know now.</span></div><div class='line' id='LC2115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="s2">&quot;absolute&quot;</span><span class="p">;</span></div><div class='line' id='LC2116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__isFlashLite</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC2117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="s2">&quot;0px&quot;</span><span class="p">;</span></div><div class='line' id='LC2118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="s2">&quot;0px&quot;</span><span class="p">;</span></div><div class='line' id='LC2119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="s2">&quot;-100px&quot;</span><span class="p">;</span></div><div class='line' id='LC2121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="s2">&quot;-100px&quot;</span><span class="p">;</span></div><div class='line' id='LC2122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">holder</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span></div><div class='line' id='LC2124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">holder</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s2">&quot;webSocketFlash&quot;</span><span class="p">;</span></div><div class='line' id='LC2125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">holder</span><span class="p">);</span></div><div class='line' id='LC2126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">container</span><span class="p">);</span></div><div class='line' id='LC2127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// See this article for hasPriority:</span></div><div class='line' id='LC2128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html</span></div><div class='line' id='LC2129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">swfobject</span><span class="p">.</span><span class="nx">embedSWF</span><span class="p">(</span></div><div class='line' id='LC2130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WEB_SOCKET_SWF_LOCATION</span><span class="p">,</span></div><div class='line' id='LC2131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;webSocketFlash&quot;</span><span class="p">,</span></div><div class='line' id='LC2132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;1&quot;</span> <span class="cm">/* width */</span><span class="p">,</span></div><div class='line' id='LC2133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;1&quot;</span> <span class="cm">/* height */</span><span class="p">,</span></div><div class='line' id='LC2134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;10.0.0&quot;</span> <span class="cm">/* SWF version */</span><span class="p">,</span></div><div class='line' id='LC2135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC2136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC2137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">hasPriority</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">swliveconnect</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">allowScriptAccess</span><span class="o">:</span> <span class="s2">&quot;always&quot;</span><span class="p">},</span></div><div class='line' id='LC2138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC2139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">e</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;[WebSocket] swfobject.embedSWF failed&quot;</span><span class="p">);</span></div><div class='line' id='LC2142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2144'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2145'>&nbsp;&nbsp;</div><div class='line' id='LC2146'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2147'><span class="cm">   * Called by Flash to notify JS that it&#39;s fully loaded and ready</span></div><div class='line' id='LC2148'><span class="cm">   * for communication.</span></div><div class='line' id='LC2149'><span class="cm">   */</span></div><div class='line' id='LC2150'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__onFlashInitialized</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// We need to set a timeout here to avoid round-trip calls</span></div><div class='line' id='LC2152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// to flash during the initialization process.</span></div><div class='line' id='LC2153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;webSocketFlash&quot;</span><span class="p">);</span></div><div class='line' id='LC2155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">.</span><span class="nx">setCallerUrl</span><span class="p">(</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">);</span></div><div class='line' id='LC2156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">.</span><span class="nx">setDebug</span><span class="p">(</span><span class="o">!!</span><span class="nb">window</span><span class="p">.</span><span class="nx">WEB_SOCKET_DEBUG</span><span class="p">);</span></div><div class='line' id='LC2157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__tasks</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__tasks</span><span class="p">[</span><span class="nx">i</span><span class="p">]();</span></div><div class='line' id='LC2159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__tasks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC2161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC2162'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2163'>&nbsp;&nbsp;</div><div class='line' id='LC2164'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2165'><span class="cm">   * Called by Flash to notify WebSockets events are fired.</span></div><div class='line' id='LC2166'><span class="cm">   */</span></div><div class='line' id='LC2167'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__onFlashEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC2170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Gets events using receiveEvents() instead of getting it from event object</span></div><div class='line' id='LC2171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// of Flash event. This is to make sure to keep message order.</span></div><div class='line' id='LC2172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// It seems sometimes Flash events don&#39;t arrive in the same order as they are sent.</span></div><div class='line' id='LC2173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">.</span><span class="nx">receiveEvents</span><span class="p">();</span></div><div class='line' id='LC2174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">events</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__instances</span><span class="p">[</span><span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">webSocketId</span><span class="p">].</span><span class="nx">__handleEvent</span><span class="p">(</span><span class="nx">events</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC2176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC2179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC2181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC2182'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2183'>&nbsp;&nbsp;</div><div class='line' id='LC2184'>&nbsp;&nbsp;<span class="c1">// Called by Flash.</span></div><div class='line' id='LC2185'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__log</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">message</span><span class="p">));</span></div><div class='line' id='LC2187'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2188'>&nbsp;&nbsp;</div><div class='line' id='LC2189'>&nbsp;&nbsp;<span class="c1">// Called by Flash.</span></div><div class='line' id='LC2190'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__error</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">message</span><span class="p">));</span></div><div class='line' id='LC2192'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2193'>&nbsp;&nbsp;</div><div class='line' id='LC2194'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__addTask</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">task</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__flash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">task</span><span class="p">();</span></div><div class='line' id='LC2197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__tasks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">task</span><span class="p">);</span></div><div class='line' id='LC2199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2200'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2201'>&nbsp;&nbsp;</div><div class='line' id='LC2202'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2203'><span class="cm">   * Test if the browser is running flash lite.</span></div><div class='line' id='LC2204'><span class="cm">   * @return {boolean} True if flash lite is running, false otherwise.</span></div><div class='line' id='LC2205'><span class="cm">   */</span></div><div class='line' id='LC2206'>&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__isFlashLite</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">navigator</span> <span class="o">||</span> <span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mimeType</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="s2">&quot;application/x-shockwave-flash&quot;</span><span class="p">];</span></div><div class='line' id='LC2211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">mimeType</span> <span class="o">||</span> <span class="o">!</span><span class="nx">mimeType</span><span class="p">.</span><span class="nx">enabledPlugin</span> <span class="o">||</span> <span class="o">!</span><span class="nx">mimeType</span><span class="p">.</span><span class="nx">enabledPlugin</span><span class="p">.</span><span class="nx">filename</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">mimeType</span><span class="p">.</span><span class="nx">enabledPlugin</span><span class="p">.</span><span class="nx">filename</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/flashlite/i</span><span class="p">)</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2215'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2216'>&nbsp;&nbsp;</div><div class='line' id='LC2217'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">WEB_SOCKET_DISABLE_AUTO_INITIALIZATION</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2218'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC2220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__initialize</span><span class="p">();</span></div><div class='line' id='LC2221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC2222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onload&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC2224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">WebSocket</span><span class="p">.</span><span class="nx">__initialize</span><span class="p">();</span></div><div class='line' id='LC2225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2227'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2228'>&nbsp;&nbsp;</div><div class='line' id='LC2229'><span class="p">})();</span></div><div class='line' id='LC2230'><br/></div><div class='line' id='LC2231'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        
          <div class="sponsor">
            <a href="http://www.rackspace.com" class="logo">
              <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
            </a>
            Powered by the <a href="http://www.rackspace.com ">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
        

        <ul class="links">
          
            <li class="blog"><a href="https://github.com/blog">Blog</a></li>
            <li><a href="https://github.com/about">About</a></li>
            <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
            <li><a href="https://github.com/training">Training</a></li>
            <li><a href="http://jobs.github.com">Job Board</a></li>
            <li><a href="http://shop.github.com">Shop</a></li>
            <li><a href="http://developer.github.com">API</a></li>
            <li><a href="http://status.github.com">Status</a></li>
          
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.51088s from fe6.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    <script>window._auth_token = "77e9e478f02fd3007a1b00492bbf47498aedbeda"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    
    
    <script type="text/javascript">(function(){var d=document;var e=d.createElement("script");e.async=true;e.src="https://d1ros97qkrwjf5.cloudfront.net/11/eum/rum.js	";e.type="text/javascript";var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s);})();NREUMQ.push(["nrf2","beacon-1.newrelic.com","2f94e4d8c2",64799,"dw1bEBZcX1RWRhoEClsAGhcMXEQ=",0.0,507,new Date().getTime()])</script>
  </body>
</html>

