#-*- coding:utf-8 -*-
import urllib2
import re
import os
import urllib
import codecs
from bs4 import BeautifulSoup
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

#设定输出的环境为utf8

def get_tag():
    url = 'http://book.douban.com/tag/'
    request = urllib2.Request(url)
    request.add_header('User-Agent', "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:36.0) Gecko/20100101 Firefox/36.0")
    text = urllib2.urlopen(request)
    soup = BeautifulSoup(text.read())
    table =  soup.findAll('table', {'class':'tagCol'})
    reg_tag = re.compile('>(.*)<')
    reg_url = re.compile('[""]http[s]?://(.*)+[""]')
    tag = {}
    tag_txt = codecs.open('tag.txt', 'w', 'utf-8')
    for item in table:
        for subitem in item.findAll('a'):
            _tag = reg_tag.search(str(subitem)).group(1)
            _url = reg_url.search(str(subitem)).group(0)[1:-1]
            if _tag == u'几米': pass
            if _tag != None and _url != "":
                print _tag, _url
                tag_txt.write(_tag+" "+_url+'\n')
                tag[_tag] = _url
    tag_txt.close()
    return tag
'''
    llist = soup.select("table.tagCol")
    tag = []
    reg_tag = re.compile('>(.*)<')
    reg_url = re.compile('[""]http[s]?://(.*)+[""]')
    for item in llist:
        print item
        alist = BeautifulSoup(str(item)).find_all('a')
        for subitem in alist:
            _tag = reg_tag.search(str(subitem)).group(1)
            _url = reg_url.search(str(subitem)).group(0)[1:-1]
            if _tag != None and _url != "":
                print _tag, _url
            #     tag[_tag] = _url
            tag.append(_url)
    return tag
'''

def get_from_file():
    if os.path.exists('tag.txt'):
        tag_txt = codecs.open('tag.txt', 'r', 'utf-8')
        tag = {}
        while True:
            line = tag_txt.readline()
            if line == "":
                break
            token = line.split()
            tag[token[0]] = token[1]
        return tag
    else:
        return get_tag()

def get_single_book(item0):
    page = 0
    try_times = 0
    book_list = []
    while True:
        url = "http://www.douban.com/tag/" + urllib.quote(str(item0)) + "/book?start="+str(page*15)

        req = urllib2.Request(url)

        text = urllib2.urlopen(req)

        soup = BeautifulSoup(text.read())
        list_soup = soup.find('div', {'class': 'mod book-list'})

        try_times += 1

        if page > 20:
            break

        print 'searching page :', page

        if list_soup == None and try_times < 10:
            continue
        elif list_soup == None or len(list_soup) <= 1:
            break

        for book_info in list_soup.findAll('dd'):
            title = book_info.find('a', {'class':'title'}).string.strip()
            desc = book_info.find('div', {'class':'desc'}).string.strip()
            desc_list = desc.split('/')
            try:
                author_info = '作者/译者： ' + '/'.join(desc_list[0:-3])
            except:
                author_info='作者/译者： 暂无'
            try:
                pub_info = '出版信息： ' + '/'.join(desc_list[-3:])
            except:
                pub_info='出版信息： 暂无'
            try:
                rating = book_info.find('span', {'class':'rating_nums'}).string.strip()
            except:
                rating='0.0'
            book_list.append([title, rating, author_info, pub_info])

        try_times = 0
        page += 1
    book_list = sorted(book_list, key=lambda student : student[1], reverse=True)
    return book_list

def get_book():
    tag = get_from_file()
    book = codecs.open('book_list.txt', 'w', 'utf-8')
    cnt = 0
    for item0, item1 in tag.items():
        print item0, item1
        book_list = get_single_book(item0)
        for item in book_list:
            book.write('%s %f %s %s\n' % (item[0], float(item[1]), item[2], item[3]))
        cnt += 1
        if cnt >= 10:
            break
    book.close()


get_book()
'''
book_list =  get_single_book(u'小说')

book = codecs.open('book_list.txt', 'w', 'utf-8')

for item in book_list:
    book.write('%s %f %s %s\n' % (item[0], float(item[1]), item[2], item[3]))
book.close()
'''
