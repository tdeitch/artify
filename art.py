from lxml import etree # XML parsing library
import re # regexp library

# gets the list of works from the artistaday.com feed 
tree = etree.parse('http://feeds.feedburner.com/ArtistADay-ArtSubmissionsAccepted')
# the regex to select the image URL
imagere = re.compile(r'img src="(http://www.aadstatic.com/uploads/[A-Za-z0-9\_]+\.jpg)"')
# gets the root element of the XML
root = tree.getroot()
# finds the first entry in the feed
entry = root.findall('{http://www.w3.org/2005/Atom}entry')[0]
# prints a link to the image
print('<a href="http://artistaday.com/" title="Artist A Day"><img src="'+imagere.search(entry.findall('{http://www.w3.org/2005/Atom}content')[0].text).groups()[0]+'"></a>')
# print artist information
print('<div style="font-size:smaller">'+entry.findall('{http://www.w3.org/2005/Atom}title')[0].text+'</div>')
