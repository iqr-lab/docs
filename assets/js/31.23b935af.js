(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{328:function(e,t,r){"use strict";r.r(t);var o=r(10),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"pointcloud-stitching-for-iqr-lab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pointcloud-stitching-for-iqr-lab"}},[e._v("#")]),e._v(" Pointcloud Stitching for IQR Lab")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Scalable, multicamera distributed system for realtime pointcloud stitching in "),t("a",{attrs:{href:"https://iqr-lab.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IQR Lab"),t("OutboundLink")],1),e._v(". This program is currently designed to use the "),t("strong",[e._v("D400 Series Intel RealSense")]),e._v(" depth cameras. Using the "),t("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense",target:"_blank",rel:"noopener noreferrer"}},[e._v("librealsense 2.0 SDK"),t("OutboundLink")],1),e._v(", depth frames are grabbed and pointclouds are computed on the edge, before sending the raw XYZRGB values to a central computer over a TCP sockets. The central program stitches the pointclouds together and displays it a viewer using "),t("a",{attrs:{href:"http://pointclouds.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PCL"),t("OutboundLink")],1),e._v(" libraries.")]),e._v(" "),t("h3",{attrs:{id:"host-py-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#host-py-script"}},[e._v("#")]),e._v(" "),t("code",[e._v("host.py")]),e._v(" Script")]),e._v(" "),t("p",[e._v("This Python script is designed to run any arbitrary script on each of the edge servers. We provide some useful scripts in "),t("a",{attrs:{href:"./edge_scripts"}},[t("code",[e._v("edge_scripts/")])]),e._v(". Run "),t("code",[e._v("python host.py -h")]),e._v(" to see usage instructions.")]),e._v(" "),t("p",[e._v("Note: "),t("code",[e._v("host.py")]),e._v(" follows the "),t("code",[e._v("iqr-vision-i.local")]),e._v(" hostnaming convention.")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("Different steps of installation are required for installing the realsense camera servers versus the central computing system. The current instructions are for running on Ubuntu 22.04 LTS.")]),e._v(" "),t("h4",{attrs:{id:"central-computer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#central-computer"}},[e._v("#")]),e._v(" Central Computer")]),e._v(" "),t("ol",[t("li",[e._v("Follow the instructions to download and install the "),t("code",[e._v("pcl")]),e._v(" from their "),t("a",{attrs:{href:"https://pointclouds.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("ul",[t("li",[e._v("Ensure that your "),t("code",[e._v("pcl")]),e._v(" version is 1.13 or later. If this version is not available in your package manager, you will need to download the source code and build it yourself.")])]),e._v(" "),t("ol",[t("li",[e._v("Clone "),t("a",{attrs:{href:"https://github.com/iqr-lab/pointcloud_stitching",target:"_blank",rel:"noopener noreferrer"}},[e._v("this repository"),t("OutboundLink")],1),e._v(" and "),t("code",[e._v("cd")]),e._v(" into it.")]),e._v(" "),t("li",[e._v("Build and compile the central computing system binaries.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir -p build && cd build\ncmake .. -DBUILD_CLIENT=true\nmake\n")])])]),t("h4",{attrs:{id:"camera-edge-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#camera-edge-server"}},[e._v("#")]),e._v(" Camera Edge Server")]),e._v(" "),t("ol",[t("li",[e._v("Go to the IQR Lab "),t("a",{attrs:{href:"https://iqr-lab.github.io/docs/computer-vision/intel-realsense.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("librealsense guide"),t("OutboundLink")],1),e._v(" and follow the instructions to install the "),t("code",[e._v("librealsense")]),e._v(" 2.0 SDK.")]),e._v(" "),t("li",[e._v("Ensure that your "),t("code",[e._v("cmake")]),e._v(" version is 3.1 or later. If not, download and install a newer version from the "),t("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CMake website"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("There are two methods for obtaining the source\n"),t("ol",[t("li",[e._v("Release - Clone "),t("a",{attrs:{href:"https://github.com/iqr-lab/pointcloud_stitching",target:"_blank",rel:"noopener noreferrer"}},[e._v("this repository"),t("OutboundLink")],1),e._v(" into "),t("code",[e._v("~/pointcloud_stitching")])]),e._v(" "),t("li",[e._v("FS Mount - This allows all edge servers to share one, live version of the source\n"),t("ol",[t("li",[e._v("Create an SSH key on the edge server to the central computer")]),e._v(" "),t("li",[e._v("Test the key and accept the fingerprint")]),e._v(" "),t("li",[e._v("Install "),t("code",[e._v("sshfs")]),e._v(": "),t("code",[e._v("sudo apt install sshfs")])]),e._v(" "),t("li",[e._v("Modify "),t("a",{attrs:{href:"edge_scripts/mount.sh"}},[t("code",[e._v("edge_scripts/mount.sh")])]),e._v(" on the central computer with the correct user login, central computer hostname, absolute paths, and identity file")]),e._v(" "),t("li",[e._v("Add this edge server's hostname to "),t("a",{attrs:{href:"/HOSTS"}},[t("code",[e._v("HOSTS")])])]),e._v(" "),t("li",[e._v("Run "),t("code",[e._v("python host.py edge_scripts/mount.sh")])]),e._v(" "),t("li",[e._v("To set this FS mount as permanent, please follow "),t("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh#step-3-permanently-mounting-the-remote-filesystem",target:"_blank",rel:"noopener noreferrer"}},[e._v("these instructions"),t("OutboundLink")],1)])])])])]),e._v(" "),t("li",[e._v("Ensure that "),t("code",[e._v("~/pointcloud_stitching")]),e._v(" is the path of the local repo")]),e._v(" "),t("li",[e._v("Run "),t("code",[e._v("python host.py edge_scripts/build_edge.sh")])])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("Each RealSense is connected to an edge computer, which are all accessible through ssh from the central computer.")]),e._v(" "),t("p",[e._v("To start running, do the following:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("SSH to each edge computer and run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pcs-camera-optimized -s\n")])])]),t("p",[e._v("If the servers are setup correctly, each one should say "),t("code",[e._v("Waiting for client...")])])]),e._v(" "),t("li",[t("p",[e._v("Then on the central computer, run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pcs-multicamera-optimized -v\n")])])]),t("p",[e._v("This begins the pointcloud stitching ("),t("code",[e._v("-v")]),e._v(" for visualizing the pointcloud).")]),e._v(" "),t("p",[e._v("For more available options, run "),t("code",[e._v("pcs-multicamera-client -h")]),e._v(" for help and an explanation of each option.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);