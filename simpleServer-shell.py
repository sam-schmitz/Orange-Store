# simpleServer-shell.py
# By: Samuel Schmitz, Ryan Nuebauer, Gavin Roy, Tryton Harper, Brice Rhodes, Jacob VanderWilt, Nick Henry
# http://localhost:8080/page1.html
# http://localhost:8080/page2.html

from socket import *
import time
from os import path

def main():
    HOST = 'localhost'   # Should it be 'localhost'?
    PORT = 8080 # An arbitrary number > 1024

    sock = socket(AF_INET, SOCK_STREAM)
    sock.bind((HOST, PORT))
    sock.listen(5)  # How deep the queue is for connection attempts

    try:
        print("Starting simpleServer!")
        while True:
            handler, addr = sock.accept()   #sock.accept() looks for an incoming item
                                            #handler is the text incoming
                                            #addr is the address

            # If we made it this far, we've got a live one!
            #print("Handler connected by", addr)
            data = handler.recv(8192) # receive up to 8192kb worth of info and turn it into a string
            data = data.decode() # data.decode() makes the data into a readable state
            #print("Data: %s" % data) 
            header = data.split('\r\n') 
            #print(header[0])
            request = header[0]
            op, uri, protocol = request.split()
            # op = the operation that the client whats you to complete okay
            # uri = identifies the file to be acsesed
            # protocol = the http version
            print("Operation: %s" % op)
            print("URI: %s" % uri)
            print("Protocol: %s" % protocol)
            uri = uri[1:]
            uri = uri.replace(".." , "")
            mimeTypes = {
                ".html": "text/html",
                ".jpg": "image/jpeg",
                ".gif": "image/gif",
                ".ico": "image/x-icon",
                ".css": "text/css",
                ".js": "application/javascript",
                }
            fileType = path.splitext(uri)[-1]
            # Send back a response
            if (path.isdir(uri) or path.isfile(uri)):  #If the uri yields a document continue
                print("HTTP protocol is HTTP/1.1")
                if fileType in mimeTypes:     #if it is a proper file type than look for the document
                    print("File in mime types")
                    if fileType == ".html":    #If the file is a .html file then return it and respond with 200
                        outFile = open(uri, "r")
                        html = outFile.read()
                        outFile.close()
                        print("Correct file found")
                        #create response
                        response =  """HTTP/1.1 200 OK\nContent-type:{}\n\n"""
                        response.format(mimeTypes[fileType])
                        response += html
                        print(response)
                        #send response
                        handler.send(response.encode())
                        print("response sent")
                    elif fileType == ".css":    #if the file type is .css this will yeild it
                        outFile = open(uri, "r")
                        css = outFile.read()
                        outFile.close()
                        print("Correct file found")
                        response = """HTTP/1.1 OK\nContent-type:{}\n\n"""
                        response.format(mimeTypes[fileType])
                        response += css
                        print(response)
                        handler.send(response.encode())
                        print("Response sent")
                    else:           #if the file type is not .html than this will yeild it
                        outFile = open(uri, "rb")
                        html = outFile.read()
                        outFile.close()
                        print("Correct file found")
                        # create a response
                        response = """HTTP/1.1 200 OK\nCOntent-Type:{}\n\n"""
                        response.format(mimeTypes[fileType])
                        #send response
                        handler.send(response.encode() + html)
                        print("response sent")
                else:   #If file type is unknown return 501 error
                    print("File type unknown")
                    response = """HTTP/1.1 501 Feature Not Implemented\nContent-type: {}\n\n"""
                    response.format(mimeTypes[fileType])
                    handler.send(response.encode())
            else:   #file can't be found return 404
                print("File not found")
                response = """HTTP/1.1 404 Not Found\nContent-type: {}\n\n"""
                response.format(mimeTypes[fileType])
                handler.send(response.encode())
            # Close the socket
            handler.close()

    finally:
        print("Closing the socket...")
        sock.close()

main()
